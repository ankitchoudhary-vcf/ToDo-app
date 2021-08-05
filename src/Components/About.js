import React from "react";

export const About = () => {
  return (
    <div className="container">
        <div className="columns is-mobile m-6 is-box notification">
            <div className="column is-full">
                <h3 className="title is-3 has-text-centered">About Todos List</h3>
                <hr style={{backgroundColor: '#00d1b2'}}/>
                <div className="content">
                    <p>
                        The Todos List is a basic application that allows you to maintain the your Todo to performed by you.
                        It a basic application for maintaining our works to do.
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
};
