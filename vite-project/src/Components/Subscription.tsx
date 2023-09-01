import { useEffect, useState } from "react";
import { useTheme } from "./theme-context";

type Suscription = {
  title: string;
  price: number | "Free";
  benefits: string[];
  currency: "U$S" | "$ARG";
  type: "monthly" | "daily" | "weekly";
};

const Subscription = () => {

  const { theme } = useTheme();

  const [subscriptions, setSubcriptions] = useState<Suscription[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    setLoading(true);
    fetch(`https://6xrb5goi1l.execute-api.us-east-1.amazonaws.com/api/subscription`)
      .then((response) => {
        response.json().then((result) => {
          setSubcriptions(result);
        });
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">
      <p className="text-5xl">Loading...</p>
    </div>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (

    <div className={` ${ theme === "dark" ? "" : "bg-[#151515] text-white"}`}>

      <h2 className="font-semibold w-auto text-center text-4xl mx-auto">Choose Your Plan</h2>
      <p className="mx-auto w-auto text-center pt-9">Let's choose the package that is best for you and explore it happily and cheerfully.</p>

      <div className="grid mx-auto w-[88%] mt-16 pb-16 gap-y-7  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {subscriptions.map((subscription) => (
          <div
            className="h-[516px] border-2 border-gray-300 px-6 py-4 rounded-lg hover:border-red-400 w-[320px] mx-auto flex flex-col justify-between"
            key={subscription.title}
          >
            <p className="pt-5 text-lg font-bold mx-auto">{subscription.title}</p>

            <div className="pl-[3.5rem] mt-[43px] space-y-4">
              {subscription.benefits.map((benefit, index) => (
                <div className="flex items-center" key={index}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className={`text-sm mx-4 text-gray-700 ${theme === "dark" ? "" : "text-white"}`}>{benefit}</span>

                </div>
              ))}
            </div>
            <div className="flex-grow"></div>

            <h4 className={`mx-auto mt-2 text-4xl font-semibold text-gray-800 ${theme === "dark" ? "" : "text-white"}`}>
              {subscription.price}
              <span className="text-base font-normal">
                {subscription.currency}
              </span>{subscription.type && (
                <span className={`text-3xl font-normal text-gray-700 ${theme === "dark" ? "" : "text-white"}`}> / {subscription.type}</span>
              )}
            </h4>

            <button className="mb-5 w-full px-4 py-2 mt-5 font-bold tracking-wide border-2 border-red-500 rounded-full text-red-500 capitalize transition-colors duration-200 transform bg-white hover:bg-red-500 hover:text-white focus:outline-none focus:bg-red-500">
              Select
            </button>
          </div>
        ))}

      </div>
    </div>

  );
};
export default Subscription;