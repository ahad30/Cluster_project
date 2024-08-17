"use client"
import { Form } from "antd";
import { ReactNode, useEffect } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { toast } from "sonner";
import ErrorHandling from "../ErrorHandling/ErrorHandling";
import SaveAndCloseButton from "../Button/SaveAndCloseButton";



const ZFormTwo = ({
  children,
  submit,
  defaultValues,
  resolver,
  isSuccess,
  isLoading,
  closeModal,
  isError,
  error,
  data,
  formType,
  buttonName,
}) => {

  // const { isAddModalOpen, isEditModalOpen } = useAppSelector(
  //   (state: RootState) => state.modal
  // );
  // const formConfig: defaultAndResolver = {};

  // if (defaultValues) {
  //   formConfig["defaultValues"] = defaultValues;
  // }
  // if (resolver) {
  //   formConfig["resolver"] = resolver;
  // }

  const methods = useForm();
  const onSubmit = (data) => {
    // console.log(data)
    submit(data);
  };

  // const errors = ErrorHandling(
  //   error?.data?.errors,
  //   // isAddModalOpen,
  //   // isEditModalOpen
  // );
  
  // useEffect(() => {

  //   if (formType === "create") {
  //     if (!isAddModalOpen || !isEditModalOpen) {
  //       methods.reset();
  //     }
  //   }
  //   if (formType === "edit") {
  //     if (!isEditModalOpen) {
  //       methods.clearErrors();
  //     }
  //   }
  // }, [isAddModalOpen, isEditModalOpen, methods]);

  
  useEffect(() => {
    if (isSuccess && closeModal) {
      closeModal();
      if (formType === "create") {
        methods.reset();
      }
    }
  }, [isSuccess]);


  useEffect(() => {
    toast.dismiss(1);
  }, []);

  
  // useEffect(() => {
  //   if (isLoading || isSuccess || isError) {
  //     if (isLoading) {
  //       toast.loading("loading...", { id: 1 });
  //     }
  //     if (isSuccess) {
  //       toast.success(data?.message, { id: 1 });
  //     }
  //     if (isError) {
  //       toast.error(error?.data?.message, { id: 1, duration: 3000 });
  //     }
  //   }
  // }, [isSuccess, isLoading, isError]);

  return (
    
    <FormProvider {...methods}>
      <Form layout="vertical" onFinish={methods.handleSubmit(onSubmit)}>
        <div>{children}</div>
          <SaveAndCloseButton
            // closeModal={closeModal}
            // isLoading={isLoading}
            // isSuccess={isSuccess}
            title={buttonName}
          />
      
        {/* <div className="mt-5">
          {Array.isArray(errors) &&
            errors.length > 0 &&
            errors.map((item) => (
              // eslint-disable-next-line react/jsx-key
              <div
                className="bg-red-100 my-2 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                role="alert"
              >
                <span className="block sm:inline">{item}</span>
              </div>
            ))}
        </div> */}
      </Form>
    </FormProvider>
  );
};

export default ZFormTwo;
