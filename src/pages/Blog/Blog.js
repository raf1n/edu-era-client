import React from "react";

const Blog = () => {
  return (
    <section className="text-gray-500 ">
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
          Q/A BLOG
        </h2>
        <div className="divide-y divide-gray-300">
          <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
            <h3 className="font-semibold md:col-span-5">what is cors?</h3>
            <p className="md:pl-0 md:col-span-7">
              CORS stands for Cross-Origin Resource Sharing. It allows us to
              relax the security applied to an API. This is done by bypassing
              the Access-Control-Allow-Origin headers, which specify which
              origins can access the API. In other words, CORS is a browser
              security feature that restricts cross-origin HTTP requests with
              other servers and specifies which domains access your resources.
            </p>
          </div>
          <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
            <h3 className="font-semibold md:col-span-5">
              Why are you using firebase? What other options do you have to
              implement authentication?
            </h3>
            <p className="md:pl-0 md:col-span-7">
              It's easy to start a project with Firebase or add a Firebase to
              your project. It allows real-time database connection, which means
              multiple users can see the changes in the data when the data gets
              created or edited. Data transmission is handled with web sockets
              so you don't have to send requests to get new data, you only need
              to subscribe once.
              <br />
              Auth0, MongoDB, Passport and Okta are the most popular
              alternatives and competitors to Firebase Authentication
            </p>
          </div>
          <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
            <h3 className="font-semibold md:col-span-5">
              How does the private route work?
            </h3>
            <p className="md:pl-0 md:col-span-7">
              The react private route component renders child components
              (children) if the user is logged in. If not logged in the user is
              redirected to the /login page with the return url passed in the
              location state property.
            </p>
          </div>
          <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
            <h3 className="font-semibold md:col-span-5">
              What is Node? How does Node work?
            </h3>
            <p className="md:pl-0 md:col-span-7">
              The Node.js run-time environment includes everything to execute a
              program written in JavaScript. Node.js is written in C, C++, and
              JavaScript, and it is built on the open-source V8 JavaScript
              engine which also powers JS in browsers such as Google Chrome. As
              V8 supports new features in JavaScript, they are incorporated into
              Node.
              <br />
              Node.js receives requests from clients, processes them, and gives
              back a response. A single thread in node.js manages them. Node.js
              uses the idea of threads to manage I/O operations and requests. A
              thread is a series of tasks that the server must complete. To
              deliver the data to several clients, it operates in parallel on
              the server. The event loop single-threaded programming language
              Node.js. It can manage several requests simultaneously in a single
              thread without blocking it for a single request. Node.js receives
              requests from clients, processes them, and gives back a response.
              A single thread in node.js manages them. Node.js uses the idea of
              threads to manage I/O operations and requests. A thread is a
              series of tasks that the server must complete. To deliver the data
              to several clients, it operates in parallel on the server. The
              event loop single-threaded programming language Node.js. It can
              manage several requests simultaneously in a single thread without
              blocking it for a single request.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
