// import React from "react";

// const CreateHabits = () => {
//   return (
//     <div className="flex justify-center ">
//       <form className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
//         <legend className="fieldset-legend">Page details</legend>

//         <label className="label">Title</label>
//         <input type="text" className="input" placeholder="My awesome page" />

//         <label className="label">Slug</label>
//         <input type="text" className="input" placeholder="my-awesome-page" />

//         <label className="label">Author</label>
//         <input type="text" className="input" placeholder="Name" />
//       </form>
//     </div>
//   );
// };

// export default CreateHabits;

import React from "react";
import useAxios from "../../Hooks/useAxios";
import Swal from "sweetalert2";

const CreateHabits = () => {
  const axiosInstance = useAxios();
  const handleAddHabit = (e) => {
    e.preventDefault();

    const form = e.target;

    const habits = {
      title: form.title.value,
      category: form.category.value,
      description: form.description.value,
      image: form.image.value,
      frequency: form.frequency.value,
      visibility: form.visibility.value,
      completionHistory: [],
    };

    axiosInstance.post("/creatHabits", habits).then((data) => {
      console.log("After secure Call", data.data);
      if (data.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Habit Has been Created",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });

    console.log(habits);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="bg-base-200 p-6 md:p-8 rounded-2xl shadow">
        <h2 className="text-3xl font-bold text-center mb-8">
          Create New Habit
        </h2>

        <form onSubmit={handleAddHabit} className="space-y-5">
          {/* Title */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Title</span>
            </label>

            <input
              type="text"
              name="title"
              placeholder="Enter habit title"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Category</span>
            </label>

            <select
              name="category"
              className="select select-bordered w-full"
              required
            >
              <option value="">Select category</option>
              <option value="Morning">Morning</option>
              <option value="Fitness">Fitness</option>
              <option value="Study">Study</option>
              <option value="Work">Work</option>
              <option value="Evening">Evening</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Description</span>
            </label>

            <textarea
              name="description"
              placeholder="Describe your habit"
              className="textarea textarea-bordered w-full h-32"
              required
            ></textarea>
          </div>

          {/* Image */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Image URL</span>
            </label>

            <input
              type="url"
              name="image"
              placeholder="https://example.com/image.jpg"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Frequency */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Frequency</span>
            </label>

            <select
              name="frequency"
              className="select select-bordered w-full"
              required
            >
              <option value="">Select frequency</option>
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
            </select>
          </div>

          {/* Visibility */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Visibility</span>
            </label>

            <select
              name="visibility"
              className="select select-bordered w-full"
              required
            >
              <option value="">Select visibility</option>
              <option value="Public">Public</option>
              <option value="Private">Private</option>
            </select>
          </div>

          {/* Submit */}
          <button type="submit" className="btn btn-primary w-full text-lg">
            Create Habit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateHabits;
