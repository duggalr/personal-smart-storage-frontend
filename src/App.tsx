import React, { useState, useEffect } from 'react';
import { Edit, Moon, Sun } from 'lucide-react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

function App() {
  const [dailyQuote, setDailyQuote] = useState(null);
  const [items, setItems] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [newItem, setNewItem] = useState("");

  // // Fetch the daily quote on component mount
  // useEffect(() => {
  //   fetch('https://your-api.onrender.com/get-daily-quote')
  //     .then((res) => res.json())
  //     .then((data) => setDailyQuote(data))
  //     .catch((err) => console.error(err));
  // }, []);

  // const addItem = () => {
  //   if (newItem.trim() === "") return;
  //   setItems((prevItems) => [...prevItems, newItem.trim()]);
  //   setNewItem("");
  //   setShowInput(false);
  // };

  const exampleQuoteDict = {
    'id': 1,
    'quote': 'It does not matter how slowly you go, as long as you do not stop.',
    'author': 'Confucius'
  };

  const [isDarkMode, setDarkMode] = React.useState(false);
  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
  };

  return (

    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-8">
    
      <div className="max-w-2xl w-full">

        {/* App Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-left text-3xl">Personal Memex</h1>

          {/* Right Section - Buttons */}
          <div className="flex items-center gap-6">

            {/* Dark Mode Toggle */}
            <DarkModeSwitch
              checked={isDarkMode}
              onChange={toggleDarkMode}
              size={26}
              className="cursor-pointer"
            />

            {/* Add Item Button */}
            <button
              className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white rounded-full cursor-pointer w-10 h-10 flex items-center justify-center shadow-lg transition duration-200 ease-in-out text-[23px]"
            >
              +
            </button>

          </div>
        </div>

        {/* Daily Quote Section */}
        <p className="mt-8 text-[20px]">
          "{exampleQuoteDict.quote}"
        </p>
        <p className="pt-2 text-[16px] text-right">
          - {exampleQuoteDict.author}
        </p>

        {/* Search Input */}
        <form className="max-w-2xl mx-auto mt-6">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search..."
              required 
            />
            <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
          </div>
        </form>        

        {/* Items List */}
        <div className="space-y-4 mt-6">
          {/* {items.map(item => (
            <ItemCard key={item.id} item={item} onEdit={onEdit} />
          ))} */}

          <div
            className="block p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 cursor-pointer"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-[22px] font-semibold text-gray-800">
                  Inspiration
                </h3>
                <p className="text-[14.5px] text-gray-500 pt-1">
                  2025-01-01
                </p>
              </div>
              <button className="text-gray-500 hover:text-gray-700 cursor-pointer">
                <Edit size={20} />
              </button>
            </div>
            <p className="mt-4 text-gray-600 line-clamp-2 text-[16px]">
              This is a really inspiring quote that might be too long to display completely in the card. It should get truncated nicely.
            </p>
          </div>

          <div
            className="block p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-[22px] font-semibold text-gray-800">
                  Inspiration
                </h3>
                <p className="text-[14.5px] text-gray-500 pt-1">
                  2025-01-01
                </p>
              </div>
              <button className="text-gray-500 hover:text-gray-700 cursor-pointer">
                <Edit size={20} />
              </button>
            </div>
            <p className="mt-4 text-gray-600 line-clamp-2 text-[16px]">
              This is a really inspiring quote that might be too long to display completely in the card. It should get truncated nicely.
            </p>
          </div>

        </div>

        {/* <div className="bg-white rounded-lg shadow p-6 mb-6"> */}
          {/* {dailyQuote ? (
            <>
              <p className="text-xl font-semibold text-gray-800">&ldquo;{dailyQuote.quote}&rdquo;</p>
              <p className="mt-4 text-right text-gray-500">- {dailyQuote.author}</p>
            </>
          ) : (
            <p className="text-gray-400">Loading daily quote...</p>
          )} */}
          {/* {exampleQuoteDict.quote}
          - {exampleQuoteDict.author}
        </div> */}

        {/* Header with + Button */}
        {/* <div className="flex items-center mb-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow focus:outline-none"
            onClick={() => setShowInput(true)}
          >
            <span className="text-2xl">+</span>
          </button>
          <h2 className="ml-4 text-2xl font-bold text-gray-700">Your Items</h2>
        </div> */}

        {/* List of Saved Items */}
        {/* <div className="space-y-2">
          {items.length === 0 ? (
            <p className="text-gray-500">No items saved yet.</p>
          ) : (
            items.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow">
                {item}
              </div>
            ))
          )}
        </div> */}

      </div>

    </div>

  );

}

export default App;