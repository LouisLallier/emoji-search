import { useState } from "react";

const Search = ({ search, setSearch }) => {
  return (
    <div className="m-9 flex flex-col items-center gap-6">
      <h1 className=" text-5xl">😎 EmojiSearch 😎</h1>
      <input
        onChange={({ target: { value } }) => {
          setSearch(value);
        }}
        className="h-12 w-96 rounded-md border-2 border-fuchsia-700 p-2"
        type="text"
        placeholder="Looking for an Emoji ?"
      />
    </div>
  );
};

export default Search;
