// function for game

export function Game() {
  return (
    <div className="rounded-lg bg-white p-4 max-w-xl space-y-6">
      <Question />
      <GivenWordOptions />
      <CurrentSentenceBuilt />
    </div>
  );
}

// question component

function Question() {
  return (
    <div>
      <p className="mb-4 text-center">Why does marissa think I snore at night?</p>
    </div>
  );
}

const wordOptions = [
  "Always",
  "Appreciate",
  "Beautiful",
  "Calm",
  "Care",
  "Celebrate",
  "Charm",
  "Clean",
  "Comfort",
  "Compassion",
  "Connect",
  "Contentment",
  "Courage",
  "Create",
  "Delight",
  "Dream",
  "Elegance",
  "Embrace",
  "Encourage",
  "Enjoy",
  "Excite",
  "Explore",
  "Faith",
  "Family",
  "Flourish",
  "Focus",
  "Friendship",
  "Generosity",
  "Gentle",
  "Genuine",
  "Grace",
  "Gratitude",
  "Happiness",
  "Harmony",
  "Health",
  "Heartfelt",
  "Honest",
  "Hope",
  "Imagine",
  "Inspire",
  "Joy",
];

function GivenWordOptions() {
  const wordButtons = wordOptions.map((wordOption) => {
    return <button className="bg-gray-100 rounded-lg px-4 py-2 hover:bg-gray-200">{wordOption}</button>;
  });

  return (
    <div className="gap-4 flex flex-wrap">
      {wordButtons}
    </div>
  );
}

function CurrentSentenceBuilt(){
    return(
        <div className="">
            <p>This is a template Sentence</p>
        </div>
    )
}
