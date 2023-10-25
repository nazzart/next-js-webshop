"use client";

import { useState, useEffect } from "react";
import FormInput from "../../ui/form/input/formInput";
import { useRef } from "react";
import { useLazyQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import Link from "next/link";
import Image from "next/image";
import SearchIcon from "../../ui/icons/searchIcon";


export default function Search() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const dropdown = useRef(null);

  const [searchData] = useLazyQuery(
    gql`
      query searchCar($keyword: String!) {
        searchCar(keyword: $keyword) {
          brand
          model
          seoTitle
          seoUrl
          imageUrl
          attributes {
            name
            value
            topParameter
          }
          price
        }
      }
    `
  );

  useEffect(() => {
    if (keyword) {
      const delayDebounceFn = setTimeout(() => {
        searchData({
          variables: { keyword: keyword },
          fetchPolicy: "network-only",
        }).then((response) => {
          setIsOpen(!isOpen);
          setResults(response.data.searchCar);
        });
      }, 1000);

      return () => clearTimeout(delayDebounceFn);
    }
  }, [keyword]);

  const closeWhenClickOutside = (e) => {
    if (dropdown.current && !dropdown.current.contains(e.target)) {
      setIsOpen(false);
      setKeyword("");
    }
  };

  const clearSearchResults = () => {
    setIsOpen(!isOpen);
    setKeyword("");
  };

  useEffect(() => {
    document.addEventListener("click", closeWhenClickOutside);
  }, []);

  return (
    <div className="w-1/3 hidden md:block relative" ref={dropdown}>
      
      <FormInput
        placeholder="Search for the car..."
        onChange={(e) => setKeyword(e.target.value)}
        value={keyword}
      />
      <SearchIcon size={20} className="absolute top-0 bottom-0 right-3 m-auto"/>
      {isOpen && (
        <div
          className="absolute bg-white w-full shadow-lg z-10" 
          onClick={() => clearSearchResults()}
        >
            <div className="p-3"><span className="text-sm">Cars found: <strong>{results.length}</strong></span></div>

          {results.map((result, id) => (
            <Link href={result.seoUrl} key={id}>
              <div className="flex p-3 bg-white hover:bg-gray-100">
                <Image
                  src={result.imageUrl}
                  width={60}
                  height={60}
                  alt={result.seoTitle}
                />
                <div className="pl-4">
                <p className="text-sm font-bold pb-2">{result.seoTitle}</p>
                <p className="text-sm text-gray-500">from <strong>{result.price}</strong> €</p>
                </div>
            
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
