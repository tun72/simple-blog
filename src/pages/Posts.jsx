import axios from "axios";
import { URL } from "../util/helper";

function Posts() {
  return (
    <>
      <div class="text-center py-12 px-6 mt-12">
        <h1 class="font-display font-bold text-5xl mb-6">The Blog</h1>
        <p class="max-w-lg mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel
          arcu commodo, sodales nibh sed, efficitur sapien.
        </p>
      </div>
      <div class="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 pt-12 pb-24">
        <div>
          <a href="/blog/this-is-latest-post/">
            <img
              src="https://images.unsplash.com/photo-1501631259223-89d4e246ed23?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1960&amp;q=80"
              class="w-full h-52 md:h-64 lg:h-96 xl:h-64 object-cover"
              alt=""
            />
          </a>
          <div class="bg-gray-50 p-8">
            <div class="text-xs text-gray-600 uppercase font-semibold">
              23 Sep 2020
            </div>
            <h2 class="mt-3 text-3xl mb-6 font-display text-black leading-tight max-w-sm">
              This is my third &amp; latest post
            </h2>
            <p class="mt-4 max-w-md">
              Bring to the table win-win survival strategies to ensure proactive
              domination. At the end of the day, going forward, a new normal
              that has evolved from generation X is on the runway heading
              towards a streamlined cloud solution.
            </p>
            <a
              href="/blog/this-is-latest-post/"
              class="flex items-center mt-6 uppercase text-sm text-black font-semibold"
            >
              Read article
              <svg
                class="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export async function loader() {
  const request = await axios.get(`${URL}/posts`);

  if (request.status !== 200) throw new Error("Something Went Wrong 💥");

  const data = await request.data;
  return data.posts;
}

export default Posts;
