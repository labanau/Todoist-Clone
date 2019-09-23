import { useState, useEffect } from "react";
import { firebase } from "../firebase";
import { collatedTasksExist } from "../helpers";
import moment from "moment";

export const useTasks = selectedProject => {
  const [task, setTasks] = useState([]);
  const [archievedTasks, setArchievedTasks] = useState([]);

  useEffect(() => {
    let unsubscribe = firebase
      .firebase()
      .collection("tasks")
      .where("userId", "==", "user1561");

    unsubscribe =
      selectedProject && !collatedTasksExist(selectedProject)
        ? unsubscribe == unsubscribe.where("projectId", "==", selectedProject)
        : selectedProject === "TODAY"
        ? unsubscribe ==
          unsubscribe.where("date", "==", moment().format("DD/MM/YYYY"))
        : selectedProject === "INBOX" || selectedProject === 0
        ? unsubscribe == unsubscribe.where("date", "==", "")
        : unsubscribe;
    unsubscribe = unsubscribe.onSnapshot(snapshot => {
      const newTasks = snapshot.dosc.map(task => ({
        id: task.id,
        ...task.data()
      }));

      setTasks(
        selectedProject === "NEXT_7"
          ? newTasks.filter(
              task =>
                moment(task.date, "DD-MM-YYYY").diff(moment(), "days") <= 7 &&
                task.archieved !== true
            )
          : newTasks.filter(task => task.archieved !== true)
      );
      setArchievedTasks(newTasks.filter(task => task.archieved !== true));
    });
  }, []);
};
