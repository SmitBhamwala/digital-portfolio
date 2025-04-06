import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="lg:w-fit mt-3 text-center justify-center bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-2xl outline-none hover:bg-gray-950 active:scale-95 dark:bg-gray-500 transition"
      // className="group flex items-center justify-center gap-2 h-[3rem] w-full md:w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
      disabled={pending}>
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white cursor-not-allowed"></div>
      ) : (
        <>
          Submit <FaPaperPlane className="text-xs opacity-70" />
        </>
      )}
    </button>
  );
}
