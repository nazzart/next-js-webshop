"use client";

import FormInput from "../components/ui/form/input/formInput";
import Button from "../components/ui/button/button";
import FormTextarea from "../components/ui/form/textarea/formTextarea";
import useForm from "@/hooks/useForm";
import validate from "@/helpers/formValidation/carRequestFormRules";
import Alert from "../components/ui/alert/alert";
import { useState } from "react";
import SidebarCheckout from "../components/sidebar/sidebarCheckout";

const Apply: React.FC = () => {
  const [successMessage, setSuccessMessage] = useState<boolean>(false);

  const submit = () => {
    setSuccessMessage(true);
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    submit,
    validate
  );

  return (
    <div className="container mx-auto mt-12">
      <div className="flex flex-col xl:flex-row flex-col-reverse">
        <div className="basis-3/5">
          <div className="bg-white rounded">
            <form onSubmit={handleSubmit} noValidate>
              <div className="p-6">
                {successMessage && (
                  <Alert
                    message={"Thank you! You have succesfully booked a car."}
                    type="success"
                  />
                )}

                <h1 className="text-2xl mb-8">Please fill the form</h1>
                <div className="mb-4">
                  <FormInput
                    type="text"
                    label="First name"
                    name="name"
                    required
                    onChange={handleChange}
                    value={values.name || ""}
                    error={errors.name}
                  />
                </div>
                <div className="mb-4">
                  <FormInput
                    type="text"
                    label="Last name"
                    name="lastname"
                    required
                    onChange={handleChange}
                    value={values.lastname || ""}
                    error={errors.lastname}
                  />
                </div>
                <div className="mb-4">
                  <FormInput
                    type="email"
                    label="E-mail"
                    name="email"
                    required
                    onChange={handleChange}
                    value={values.email || ""}
                    error={errors.email}
                  />
                </div>
                <div>
                  <FormTextarea
                    label="Message"
                    name="message"
                    placeholder="Add something what we should know..."
                    rows="10"
                  />
                </div>
              </div>
              <div className="bg-gray-200 rounded-b p-6">
                <Button
                  size="md"
                  classes={"bg-secondary text-white"}
                  type="submit"
                >
                  Apply
                </Button>
              </div>
            </form>
          </div>
        </div>
        <SidebarCheckout
        />
      </div>
    </div>
  );
}

export default Apply;