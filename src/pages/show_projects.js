//Page Layout
import '../css/index.css';

let pageCreation = (()=>{

    const body = document.querySelector("body");
    const main = document.createElement("main");
    const project_button = document.createElement("button");
    project_button.classList.add("project_add");
    const project_form = document.createElement("form");
    project_form.id = "project_form";

    project_button.textContent = "New Project";

    const form_input = document.createElement('input');
    const form_label = document.createElement('label');
    const form_submit = document.createElement('input');
    form_label.textContent = "Project Name";
    form_label.setAttribute("for", "project_name");
    form_input.setAttribute("name", "project_name");
    form_input.setAttribute("type", "text");
    form_input.id = "project_name";
    form_submit.setAttribute("type", "submit");
    form_submit.textContent = "Add";

    project_form.appendChild(form_label);
    project_form.appendChild(form_input);
    project_form.appendChild(form_submit);

    main.appendChild(project_button);
    main.appendChild(project_form);

    body.appendChild(main);
})();

export {pageCreation};