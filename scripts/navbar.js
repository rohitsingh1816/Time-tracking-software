function navbar(){
    return `<div id="menubar">
    <i class="fa-solid fa-list"></i>
      <div id="navbar1">
          
          <div id="navbar_left">
              <img src="./images/thetimemachine.jpeg" alt="">
              <h2>TheTimeMachine</h2>
             <div id="drop_button">
              <button>EN</button>
              <div id="dropdown_button">
                  <button >English</button>
                  <button>Deutsch</button>
              </div>
             </div>
          </div>
          
          
          
          <div id="navbar_middle">
          
          
              <div class="dropdown" >
                  <h3 class="dropdown_btn">Why TheTimeMachine <i class="fa-solid fa-chevron-down"></i></h3>
                  <div class="dropdown_content">
                      
                          <div class="side">
                              <h3 class="teal">Overview</h3>
                              <h3><i class="fa-solid fa-building"></i>Industry</h3>
                              <p>Made for all industry Check Benifits of usage.</p>
          
                          </div> <div>
          
                          </div>
          
                          <div class="side">
                              <h3 class="teal">Features</h3>
                              <h3> <i class="fa-solid fa-clock"></i> Time Tracking</h3>
                              <p>Capture and controlCheck Benifits of usage</p>
                          </div>
          
                          <div class="down">
                              <h3> <i class="fa-solid fa-newspaper"></i> Billing & Invoicing</h3>
                              <p>Set billable rates and easily create invoices</p>
                          </div>
          
                          <div class="down">
                              <h3><i class="fa-solid fa-list-check"></i> Project Management</h3>
                              <p>Create projects,set rates and budgets</p>
                          </div>
          
                          <div class="down">
                              <h3><i class="fa-solid fa-people-roof"></i>Customers</h3>
                              <p>See why business use TMetric for time tracking and workflow Management</p>
                          </div>
          
                          <div></div>
          
                          <div class="down">
                              <h3><i class="fa-solid fa-people-group"></i>Team Management</h3>
                              <p>Monitor productivity and activity level of your team</p>
                          </div>
          
                          <div class="down">
                              <h3><i class="fa-solid fa-bars-progress"></i>Task Management</h3>
                              <p>Manage tasks and set up an effective workflow</p>
                          </div>
          
                          <div class="down">
                              <h3><i class="fa-solid fa-plane-departure"></i>Time Off</h3>
                              <p>Simply ask for days off and control teams attendance</p>
                          </div>
                          
                  </div>
              </div>
          
          
              <div class="dropdown" >
                  <h3 class="dropdown_btn">Apps & Integration <i class="fa-solid fa-chevron-down"></i></h3>
                  <div class="dropdown_content">
                      
                          <div class="side">
                              <h3 class="teal">Apps</h3>
                              <h3><i class="fa-solid fa-arrow-up-right-from-square"></i>Browser Extenstion</h3>
                              <p>Simple time tracking extention which helps you be more productive</p>
                          </div>
                          <div></div>
                          <div class="side">
                              <h3 class="teal">Integration</h3>
                              <h3><i class="fa-brands fa-jira"></i>Jira</h3>
                              <p>Time tracking on evry task in one click</p>
                          </div>
          
                          <div class="down">
                              <h3><i class="fa-solid fa-align-justify"></i>Asana</h3>
                              <p>Start to accurately track time of tasks</p>
                          </div>
          
                          <div class="down">
                              <h3><i class="fa-solid fa-list"></i>Todoist</h3>
                              <p>Track time of your lists and tasks</p>
                          </div>
          
                              <div class="down up">
                              <h3><i class="fa-brands fa-app-store-ios"></i>Mobile apps</h3>
                              <p>Install TMetric app to your phone or a tablet device.Android and IOS platforms are supported</p>
                          </div>
          
                          <div></div>
                           
                         <div class="down up">
                              <h3><i class="fa-brands fa-microsoft"></i>MS Office</h3>
                              <p>Get plugin for tracking time in MS Office online</p>
                          </div>
          
                          <div class="down up">
                              <h3><i class="fa-brands fa-github"></i>GitHub</h3>
                              <p>Track time spend working on an issues with one mouse click</p>
                          </div>
          
                          <div class="down up">
                              <h3><i class="fa-solid fa-laptop"></i>Freshdesk</h3>
                              <p>Track time spend on every support ticket</p>
                          </div>
          
                          <div >
                              <h3><i class="fa-solid fa-desktop"></i>Desktop apps</h3>
                              <p>Download TMetric app for your desktop computer or a laptop</p>
                          </div>
                          
                  </div>
              </div>
              <div><h3><a href="pricing.html">Pricing</a></h3></div>
             <div> <h3><a href="support.html">Support</a></h3></div>
              <div><h3><a href="about.html">Blog</a></h3></div>
          </div>
          <div id="navbar_right">
              <h3><a href="./html/login.html">Login</a></h3>
              <button><a href="./html/signup.html">Sign Up</a></button>
          </div>
      </div>
  </div>`
}
export default navbar
