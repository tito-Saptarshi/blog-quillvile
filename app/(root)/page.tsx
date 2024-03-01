import Hero from "@/components/shared/Hero";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { fetchPosts } from "@/lib/actions/blog.actions";



export default async function Home() {
  const fetchedPosts = await fetchPosts();

  console.log(fetchedPosts);
  

  return (
    <main className="mt-28 w-full" >
      {/* <UserButton /> */}
      {/* <Hero /> */}
      
      {fetchedPosts.length === 0 ? (
        <div className="mx-auto">
          <p className="text-3xl mx-auto w-full text-center">No threads found</p></div>
        ) : (
          <>
          {fetchedPosts.map((post) => {
            
          }
          )}
          </>
        )
        }
    </main>
    // <div>
    //   <UserButton afterSignOutUrl="/"/>
    // </div>
  );
}
