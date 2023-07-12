import React from "react";
import { Layout } from "../../../includes/layout"

const TodoApp: React.FC<any> =()=> {
  return(
    <Layout>
      <section id="todo-app-page" className="page-container">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h1 className="text-center">Todo App</h1>
            </div>
          </div>
        </div>
      </section>    
    </Layout>
  )
}

export default TodoApp;