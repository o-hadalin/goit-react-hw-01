import React, { useState } from "react";
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import userData from "./userData.json";
import friends from "./friends.json";

const App = () => {
  const [currentTask, setCurrentTask] = useState("task1");

  return (
    <div>
      <nav>
        <button onClick={() => setCurrentTask("task1")}>Task 1</button>
        <button onClick={() => setCurrentTask("task2")}>Task 2</button>
        <button onClick={() => setCurrentTask("task3")}>Task 3</button>
      </nav>

      <div>
        {currentTask === "task1" && (
          <Profile
            name={userData.username}
            tag={userData.tag}
            location={userData.location}
            image={userData.avatar}
            stats={userData.stats}
          />
        )}
        {currentTask === "task2" && <FriendList friends={friends} />}
        {currentTask === "task3" && <div>Завдання 3 (Placeholder)</div>}
      </div>
    </div>
  );
};

export default App;
