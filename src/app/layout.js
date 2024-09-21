"use client";
import { useEffect, useState } from "react";
import "./globals.css";
import UseLoader from "@/components/UseLoader";
import { Provider } from "react-redux";
import store from "@/redux/store/store";
import { Toaster } from "sonner";

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    setIsLoading(false);
  }, 500);

  return () => clearTimeout(timer);
}, []);


  return (
    <html lang="en">
      <body>

            <>
            {  
              isLoading ? ( 
                <div>
                  <UseLoader/>
                </div>
          ): 
          (
              <Provider store={store}>
            <Toaster expand={true} richColors />
              <div className="">{children}</div>
              </Provider>
          )
        }
            </>
      </body>
    </html>
  );
}
