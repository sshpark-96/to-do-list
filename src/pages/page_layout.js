//Page Layout
import '../css/reset.css';
import '../css/index.css';
import { project_todo } from './project_todo';

let page_layout = (()=>{

    const body = document.querySelector("body")
    const container = document.createElement("div");
    container.id = "container";

    const header = document.createElement("header");
    const main = document.createElement("main");
    const footer = document.createElement('footer');

    //Header - logo + welcome
    const logo = document.createElement("span");
    logo.textContent = "To-Do List";
    const welcome = document.createElement("span");
    welcome.textContent = "Welcome, User";

    header.appendChild(logo);
    header.appendChild(welcome);

    container.appendChild(header);

    //Side Bar - Your Projects + Your Tasks + Due Today
    const side_bar = document.createElement("div");
    side_bar.id = "side_bar";

    const projects = document.createElement("div");
    projects.id = "projects";
    const p_section = document.createElement("div");
    p_section.id = "p_section";
    const p_name = document.createElement("span");
    p_name.textContent = "Your Projects";
    const p_add = document.createElement("span");
    p_add.innerHTML = '<svg id="p_add" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>';
    const projects_list = document.createElement("div");
    projects_list.id = "projects_list";

    p_section.appendChild(p_name);
    p_section.appendChild(p_add);
    projects.appendChild(p_section);
    projects.appendChild(projects_list);
    
    const tasks = document.createElement("div");
    tasks.id = "tasks";
    const t_section = document.createElement("div");
    t_section.id = "t_section";
    const t_name = document.createElement("span")
    t_name.textContent = "Your Tasks";
    const t_add = document.createElement("span");
    t_add.innerHTML = '<svg id="t_add" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>';
    const tasks_list = document.createElement("div");
    tasks_list.id = "tasks_list";

    t_section.appendChild(t_name);
    t_section.appendChild(t_add);
    tasks.appendChild(t_section);
    tasks.appendChild(tasks_list);

    const due_today = document.createElement("div");
    due_today.id = "due_today";
    const d_section = document.createElement("div");
    d_section.id = "d_section";
    const d_name = document.createElement("span")
    d_name.textContent = "Due Today";
    const today_list = document.createElement("div");
    today_list.id = "today_list";

    d_section.appendChild(d_name);
    due_today.appendChild(d_section);
    due_today.appendChild(today_list);

    side_bar.appendChild(projects);
    side_bar.appendChild(tasks);
    side_bar.appendChild(due_today);

    main.appendChild(side_bar);


    //Content - Nothing inside for now (But will display all the tasks in project or in viewing all tasks)
    
    const content = document.createElement("div");
    content.id = "content";
    const content_name = document.createElement("span");
    content_name.id = "content_name";
    const content_display = document.createElement("div");
    content_display.id = "content_display";
    //temporary placeholder:
    content_display.textContent = "Content Goes Here";
    content_name.textContent = "Content Title (Your Tasks, Your Projects, Specific Projects Due Today, etc)"
    
    content.appendChild(content_name);
    content.appendChild(content_display);

    main.appendChild(content);


    container.appendChild(main);


    //Footer - Link to GitHub
    footer.textContent = "This is footer";

    container.appendChild(footer);

    body.appendChild(container);
})();

export {page_layout};


// for Project Section
// const body = document.querySelector("body");
// const main = document.createElement("main");
// const project_button = document.createElement("button");
// project_button.classList.add("project_add");
// const project_form = document.createElement("form");
// project_form.id = "project_form";
// // project_form.classList.add("hidden");

// project_button.textContent = "New Project";

// const form_input = document.createElement('input');
// const form_label = document.createElement('label');
// const form_submit = document.createElement('input');
// form_label.textContent = "Project Name";
// form_label.setAttribute("for", "project_name");
// form_input.setAttribute("name", "project_name");
// form_input.setAttribute("type", "text");
// form_input.id = "project_name";
// form_input.required = true;
// form_submit.setAttribute("type", "submit");
// form_submit.textContent = "Add";

// project_form.appendChild(form_label);
// project_form.appendChild(form_input);
// project_form.appendChild(form_submit);

// main.appendChild(project_button);
// main.appendChild(project_form);

// body.appendChild(main);

// const content = document.createElement('div');
// content.id = "content";

// body.appendChild(content);