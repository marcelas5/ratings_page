import { useState } from "react";
import {
  CheckIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/20/solid";
import { Radio, RadioGroup } from "@headlessui/react";
import StarReview from "./StarReview.tsx";

const review = {
  heading: "Please rate your stay with us",
  name: "Big Sky Resort",
  href: "#",
  price: "$220",
  imageSrc:
    "https://responsibleyatri.org/wp-content/uploads/2023/02/Types-of-Accommodations-in-Tourism.jpg",
  imageAlt:
    "A house with a pool and a view of the mountains",
  options: [
    { name: "Yes", description: "I would most definitely reccommend this place to a frined." },
    { name: "No", description: "I would not reccommend this place to anyone." },
  ],
};

export default function Example() {
  const [selectedOption, setSelectedOption] = useState(review.options[0]);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);


const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setSubmitted(true); 
};

if (submitted) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500">
      <div className="bg-white rounded-lg shadow-lg p-6 text-center w-full max-w-md">
        <h1 className="text-base font-semibold text-gray-800 mb-2">
          Thank you for your review!
        </h1>
        <p className="text-sm text-gray-500 mb-1">Your rating: {rating}</p>
        <p className="text-sm text-gray-500">Your comment: {comment}</p>
      </div>
    </div>
  );
}


  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        {/* Review details */}
        <div className="lg:max-w-lg lg:self-end">
          <div className="mt-4">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {review.heading}
            </h1>
          </div>
          <section aria-labelledby="information-heading" className="mt-4">
            <div className="flex items-center">
              <p className="text-lg text-gray-900 sm:text-xl flex items-center gap-4">
                {review.name}
                <span className="text-gray-500">|</span>
                {review.price} / per night
              </p>
            </div>
            <div className="mt-6 flex items-center">
              <CheckIcon
                aria-hidden="true"
                className="size-5 shrink-0 text-green-500"
              />
              <p className="ml-2 text-sm text-gray-500">verified stay</p>
            </div>
          </section>
        </div>

        {/* Product image */}
        <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
          <img
            alt={review.imageAlt}
            src={review.imageSrc}
            className="aspect-square w-full rounded-lg object-cover"
          />
        </div>

        {/* Product form */}
        <div className="mt-2 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
          <form onSubmit={handleSubmit}>
            <div>
              <StarReview rating={rating} setRating={setRating} />
            </div>
            <label htmlFor="comment" className="block text-lg font-medium">
              Leave a review:
            </label>
            <textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Type your review here..."
              className="w-full h-32 p-2 border border-gray-300 rounded"
            />
            <div className="sm:flex sm:justify-between">
              {/* Size selector */}
              <fieldset>
                <legend className="block text-sm font-medium text-gray-700">
                  I would recommend this place to a friend
                </legend>
                <RadioGroup
                  value={selectedOption}
                  onChange={setSelectedOption}
                  className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2"
                >
                  {review.options.map((option) => (
                    <Radio
                      key={option.name}
                      as="div"
                      value={option}
                      aria-label={option.name}
                      aria-description={option.description}
                      className="group relative block cursor-pointer rounded-lg border border-gray-300 p-4 focus:outline-none data-[focus]:ring-2 data-[focus]:ring-indigo-500"
                    >
                      <p className="text-base font-medium text-gray-900">
                        {option.name}
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        {option.description}
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
                  onMouseEnter={() => {
                    // Show tooltip or additional information
                    alert(
                      "Your review will be publicly visible with your username, and is subject to our Terms of Use and Privacy Policy."
                    );
                  }
                  }
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
        </div>
      </div>
    </div>
  );
}
