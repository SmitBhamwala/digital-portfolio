import { toast, ToastOptions } from "react-hot-toast";
import { useTheme } from "@/context/theme-context";

export const useCustomToast = () => {
  const { theme } = useTheme();

  const isDarkMode = theme === "dark";
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  const getToastOptions = (type: "error" | "success"): ToastOptions => {
    const baseOptions: ToastOptions = {
      position: isMobile ? "top-center" : "top-right",
    };

    if (isDarkMode) {
      baseOptions.style = {
        background: "rgb(51 65 85)",
        color: "#fff",
      };
    }

    return baseOptions;
  };

  const showToast = (type: "error" | "success", message: string) => {
    const options = getToastOptions(type);
    if (type === "error") {
      toast.error(message, options);
    } else {
      toast.success(message, options);
    }
  };

  return { showToast };
};
