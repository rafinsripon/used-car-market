import React from "react";

const Blog = () => {
  return (
    <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8 mt-16 pb-12">
      

      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-4"
      >
        <div className="collapse-title text-2xl font-bold text-slate-900">
          What are the different ways to manage a state in a React application?
        </div>
        <div className="collapse-content">
          <h2 className="text-secondary font-bold text-lg">
            There are four main types of state you need to properly manage in
            your React apps:
          </h2>
          <li className="list-decimal font-bold text-gray-600">Local state</li>
          <li className="list-decimal font-bold text-gray-600">Global State</li>
          <li className="list-decimal font-bold text-gray-600">Server State</li>
          <li className="list-decimal font-bold text-gray-600">URL state</li>
          <span className="font-bold text-base">Local (UI) state :– </span>
          <p className="font-bold text-gray-600 text-base">
            Local state is data we manage in one or another component.For
            example, local state would be needed to show or hide a modal
            component or to track values for a form component, such as form
            submission, when the form is disabled and the values of a form’s
            inputs.
          </p>

          <span className="font-bold text-base">Global State :– </span>
          <p className="font-bold text-gray-600">
            Global state is data we manage across multiple components.A common
            example of global state is authenticated user state. If a user is
            logged into our app, it is necessary to get and change their data
            throughout our application.
          </p>
          <span className="font-bold text-base">Server State:– </span>
          <p className="font-bold text-gray-600">
            Data that comes from an external server that must be integrated with
            our UI state.There are several pieces of state that must be managed
            every time you fetch or update data from an external server,
            including loading and error state.
          </p>
          <span className="font-bold text-base">URL state:– </span>
          <p className="font-bold text-gray-600">
            Data that exists on our URLs, including the pathname and query
            parameters.URL state is often missing as a category of state, but it
            is an important one. In many cases, a lot of major parts of our
            application rely upon accessing URL state.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-4"
      >
        <div className="collapse-title text-2xl font-bold text-slate-900">
          How does prototypical inheritance work?
        </div>
        <div className="collapse-content">
          <p className="font-bold text-gray-600">
            The Prototypal Inheritance is a feature in javascript used to add
            methods and properties in objects. It is a method by which an object
            can inherit the properties and methods of another object.
            Traditionally, in order to get and set the (Prototype) of an object,
            we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in
            modern language, it is being set using
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-4"
      >
        <div className="collapse-title text-2xl font-bold text-slate-900">
          What is a unit test? Why should we write unit tests?
        </div>
        <div className="collapse-content">
          <li className="list-none font-bold text-gray-600">
            Unit testing is a software development process in which the smallest
            testable parts of an application, called units, are individually and
            independently scrutinized for proper operation. This testing
            methodology is done during the development process by the software
            developers and sometimes QA staff. The main objective of unit
            testing is to isolate written code to test and determine if it works
            as intended. Unit testing is an important step in the development
            process, because if done correctly, it can help detect early flaws
            in code which may be more difficult to find in later testing stages.
          </li>
          <li className="list-none font-bold text-gray-600">
            A unit test typically comprises of three stages: plan, cases and
            scripting and the unit test itself. In the first step, the unit test
            is prepared and reviewed. The next step is for the test cases and
            scripts to be made, then the code is tested. Test-driven development
            requires that developers first write failing unit tests. Then they
            write code and refactor the application until the test passes. TDD
            typically results in an explicit and predictable code base.
          </li>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-4"
      >
        <div className="collapse-title text-2xl font-bold text-slate-900">
          React vs. Angular vs. Vue?
        </div>
        <div className="collapse-content">
          <p className="text-lg font-bold">React js Vs Angular</p>
          <p className="font-bold text-gray-600">
            If the choice you’re making is based on Angular vs React alone, then
            you’ll simply need to consider the pros and cons discussed for those
            libraries in this post. But overall, keep in mind that both
            libraries can be used for mobile and web apps, while Angular is
            generally better for more complex apps that are enterprise-ready.
            React often requires extra modules and components, which keeps the
            core library small, but means there’s extra work involved when
            incorporating outside tools. Angular, on the other hand, is more of
            a full-fledged solution that doesn’t require extras like React often
            does, though it does have a steeper learning curve for its core
            compared to React. React is more suitable for intermediate to
            advanced JavaScript developers who are familiar with concepts from
            ES6 and up, while Angular favors those same developers who are also
            familiar with TypeScript.s.
          </p>
          <p className="text-lg font-bold">React js Vs Vue</p>
          <p className="font-bold text-gray-600">
            The choice between React vs Vue is often debated and it’s not an
            easy one. Vue has a vibrant and ever-growing community and has taken
            over popularity vs. React in many respects. React developers are
            still churning out lots of new components and extras, so there’s no
            sign that React is on the decline either. Vue is generally more
            suited to smaller, less complex apps and is easier to learn from
            scratch compared to React. Vue can be easier to integrate into new
            or existing projects and many feel its use of HTML templates along
            with JSX is an advantage. Overall, Vue might be the best choice if
            you’re a newer developer and not as familiar with advanced
            JavaScript concepts, while React is quite well suited for
            experienced programmers and developers who have worked with
            object-oriented JavaScript, functional JavaScript, and similar
            concepts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
