import { useState } from "react";
import {
  CheckIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "@heroicons/react/20/solid";
import { Radio, RadioGroup } from "@headlessui/react";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";

const product = {
  name: "Please rate your stay with us",
  href: "#",
  price: "$220",
  description:
    "Don't compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.",
  imageSrc:
    "https://responsibleyatri.org/wp-content/uploads/2023/02/Types-of-Accommodations-in-Tourism.jpg",
  imageAlt:
    "A house with a pool and a view of the mountains",
  sizes: [
    { name: "Yes", description: "I would most definitely reccommend this place to a frined." },
    { name: "No", description: "I would not reccommend this place to anyone." },
  ],
};
const reviews = { average: 4, totalCount: 1624 };

function classNames(...classes: string[]) {
  // Filter out falsy values and join the remaining classes with a space
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        {/* Product details */}
        <div className="lg:max-w-lg lg:self-end">
          <div className="mt-4">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {product.name}
            </h1>
          </div>

          <section aria-labelledby="information-heading" className="mt-4">
            <h2 id="information-heading" className="sr-only">
              Product information
            </h2>

            <div className="flex items-center">
              <p className="text-lg text-gray-900 sm:text-xl">
                {product.price} | per night
              </p>

              <div className="ml-4 border-l border-gray-300 pl-4">
                <h2 className="sr-only">Reviews</h2>
                <div className="flex items-center">
                  <div>
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          aria-hidden="true"
                          className={classNames(
                            reviews.average > rating
                              ? "text-yellow-400"
                              : "text-gray-300",
                            "size-5 shrink-0"
                          )}
                        />
                      ))}
                    </div>
                    <p className="sr-only">{reviews.average} out of 5 stars</p>
                  </div>
                  <p className="ml-2 text-sm text-gray-500">
                    {reviews.totalCount} reviews
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-6">
              <p className="text-base text-gray-500">{product.description}</p>
            </div>

            <div className="mt-6 flex items-center">
              <CheckIcon
                aria-hidden="true"
                className="size-5 shrink-0 text-green-500"
              />
              <p className="ml-2 text-sm text-gray-500">
                verified stay
              </p>
            </div>
          </section>
        </div>

        {/* Product image */}
        <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
          <img
            alt={product.imageAlt}
            src={product.imageSrc}
            className="aspect-square w-full rounded-lg object-cover"
          />
        </div>

        {/* Product form */}
        <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
          <section aria-labelledby="options-heading">
            <h2 id="options-heading" className="sr-only">
              Product options
            </h2>

            <form>
              <div className="sm:flex sm:justify-between">
                {/* Size selector */}
                <fieldset>
                  <legend className="block text-sm font-medium text-gray-700">
                    I would recommend this place to a friend
                  </legend>
                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2"
                  >
                    {product.sizes.map((size) => (
                      <Radio
                        key={size.name}
                        as="div"
                        value={size}
                        aria-label={size.name}
                        aria-description={size.description}
                        className="group relative block cursor-pointer rounded-lg border border-gray-300 p-4 focus:outline-none data-[focus]:ring-2 data-[focus]:ring-indigo-500"
                      >
                        <p className="text-base font-medium text-gray-900">
                          {size.name}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          {size.description}
                        </p>
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-indigo-500"
                        />
                      </Radio>
                    ))}
                  </RadioGroup>
                </fieldset>
              </div>
              <div className="mt-4">
                <a
                  href="#"
                  className="group inline-flex text-sm text-gray-500 hover:text-gray-700"
                >
                  <span>How will my review be shown?</span>
                  <QuestionMarkCircleIcon
                    aria-hidden="true"
                    className="ml-2 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                  />
                </a>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                  Send the review
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
