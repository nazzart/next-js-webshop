"use client";

import FormInput from "../components/ui/form/input/formInput";
import Button from "../components/ui/button/button";
import FormTextarea from "../components/ui/form/textarea/formTextarea";
import {useSelector } from "react-redux";
import Sidebar from "../components/sidebar/sidebar";

export default function Apply() {

  const configurator = useSelector((state) => state.configurator);
  return (
    <div className="container mx-auto mt-12">
      <div className="flex flex-col xl:flex-row flex-col-reverse">
        <div className="basis-3/5">
          <div className="bg-white rounded">
            <form onSubmit={e => { e.preventDefault();}}>
              <div className="p-6">
                <h1 className="text-2xl mb-8">Please fill the form</h1>
                <div className="mb-4">
                  <FormInput type="text" label="First name" required />
                </div>
                <div className="mb-4">
                  <FormInput type="text" label="Last name" required />
                </div>
                <div className="mb-4">
                  <FormInput type="text" label="E-mail" required />
                </div>
                <div>
                  <FormTextarea
                    label="Message"
                    placeholder="Add something what we should know..."
                    rows="10"
                  />
                </div>
              </div>
              <div className="bg-gray-200 rounded-b p-6">
                <Button size="md" classes={"bg-secondary text-white"}>
                  Apply
                </Button>
              </div>
            </form>
          </div>
        </div>
        <Sidebar title={configurator.car.seoTitle} attributes={configurator.car.attributes} price={configurator.price}/>
      </div>
    </div>
  );
}
