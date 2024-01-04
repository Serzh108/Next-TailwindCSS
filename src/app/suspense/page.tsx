import { Suspense } from 'react';
// import { PostFeed, Weather } from './Components';

export default function Posts() {
  return (
    <section>
      <Suspense fallback={<p>Loading feed...</p>}>
        {/* <PostFeed /> */}
        <div className="pt-12 mb-24">
          <p>Some data #1</p>
          <p>after loading #1</p>
        </div>
      </Suspense>
      <Suspense fallback={<p>Loading weather...</p>}>
        {/* <Weather /> */}
        <div>
          <p className="mb-12 text-center opacity-50">Some data #2 </p>
          <p>after loading #2</p>
        </div>
      </Suspense>
    </section>
  );
}
