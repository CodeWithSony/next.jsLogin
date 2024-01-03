// import Link from "next/link";

export default function LeftSideBar() {
  return (
    <>
      <div className="flex flex-col w-1/5 bg-green-200">
        <div className="ml-8 mt-8">
          <h2 className="font-bold">Filter</h2>
          <form className="flex flex-col justify-start items-start w-full h-1/4">
            <label for="vehicle1">
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              Herb
            </label>
            <br />

            <label for="vehicle3">
              <input
                type="checkbox"
                id="vehicle3"
                name="vehicle3"
                value="Boat"
              />
              Tree
            </label>
            <br />
            <br />
            {/* <input type="submit" value="Submit"/> */}
          </form>
        </div>
      </div>
    </>
  );
}
