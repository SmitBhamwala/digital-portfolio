import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="lg:w-fit mt-3 px-7 py-3 rounded-2xl flex gap-2 items-center justify-center text-center bg-gray-900 dark:bg-gray-300 hover:bg-gray-950 text-white dark:text-black outline-hidden active:scale-95 transition"
      disabled={pending}>
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white dark:border-black cursor-not-allowed"></div>
      ) : (
        <>
          Submit <FaPaperPlane className="text-xs opacity-70" />
        </>
      )}
    </button>
  );
}
