import React, { useEffect, useState } from 'react';
import { Card, Grid, Tag } from 'antd-mobile';

function Todo() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1/todos")
      .then((response) => {
        response.json().then((result) => { setTasks(result) })
      })
      .catch((err) => { console.log(err) })

    // return () => {
    //   setTasks([]);
    // }
  }, [])


  return (
    <div>
      <Grid columns={2} gap={10}>
        {tasks.map((v, i) => {
          return (
            <Grid.Item>
              <Card
                key={i}
                title={v.title}
                headerStyle={{
                  backgroundColor: 'ButtonFace',
                  display: 'flex',
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 10
                }}
                bodyStyle={{
                  backgroundColor: "snow",
                  display: 'flex',
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 10
                }}
              >
                <Tag color={v.completed ? 'success' : "warning"}>{v.completed ? 'Done' : 'ongoing'}</Tag>
              </Card>
            </Grid.Item>
          )
        })}
      </Grid>
    </div>
  )
}

export default Todo
