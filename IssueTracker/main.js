// initalize variables
var newDescriptionsArray = new Array();
var newUsersArray = new Array();
var newPriorityArray = new Array();
var cont = 0;


function SwitchMode(clicked_element) {

    // Switch selected buttons
    if (document.getElementById(clicked_element).classList[1] != 'selected') {
        document.getElementById('addIssueBtn').classList.toggle('selected');
        document.getElementById('curentIssuesBtn').classList.toggle('selected');
    }

    //change visible container
    if (document.getElementById('addIssueBtn').classList[1] == 'selected') {
        document.getElementById('add_issue_form').style.display = 'block';
        document.getElementById('curent_issues').style.display = 'none';
    } else {
        document.getElementById('add_issue_form').style.display = 'none';
        document.getElementById('curent_issues').style.display = 'block';
        CreateCurentIssuesList();
    }

}

function AddIssue() {
    // get the data from the user
    let NewDescription = document.getElementById('description').value;
    let NewUser = document.getElementById('assign_to').value;
    let NewPriority = document.getElementById('priority').value;

    if (NewDescription == '' || NewUser == '') {
        alert("You need to fill all");
        return;
    }



    // reset the form
    document.getElementById('description').value = '';
    document.getElementById('assign_to').value = '';
    document.getElementById('priority').value = 'Low';

    //put the data into arrays
    newDescriptionsArray.push(NewDescription);
    newUsersArray.push(NewUser);
    newPriorityArray.push(NewPriority);

}

function CreateCurentIssuesList() {
    let Container = document.getElementById("curent_issues");

    for (var i = 0; i < newDescriptionsArray.length; i++) {

        let issueContainer = document.createElement('div');
        let DescriptionLabel = document.createElement('p');
        let AssignLabel = document.createElement('span');
        let PriorityLabel = document.createElement('span');
        let issueDescription = document.createElement('p');
        let issueUser = document.createElement('p');
        let issuePriority = document.createElement('p');
        let Line = document.createElement('hr');
        let DeleteBtn = document.createElement('p');

        issueContainer.setAttribute('id', "issue" + (++cont));

        AssignLabel.textContent = "Assiged to:  ";
        PriorityLabel.textContent = "Priority:  ";
        DescriptionLabel.textContent = "Description:";
        AssignLabel.setAttribute('class', "stand_out");
        PriorityLabel.setAttribute('class', "stand_out");
        DescriptionLabel.setAttribute('class', "stand_out");

        DeleteBtn.textContent = "Delete"
        DeleteBtn.setAttribute('class', "delete_button");
        DeleteBtn.setAttribute('onclick', "DeleteIssue(" + cont + ")");

        issueUser.appendChild(AssignLabel);
        issueUser.appendChild(document.createTextNode(newUsersArray[i]));

        issuePriority.appendChild(PriorityLabel);
        issuePriority.appendChild(document.createTextNode(newPriorityArray[i]));

        issueDescription.textContent = newDescriptionsArray[i];

        issueContainer.appendChild(issueUser);
        issueContainer.appendChild(issuePriority);
        issueContainer.appendChild(DescriptionLabel);
        issueContainer.appendChild(issueDescription);
        issueContainer.appendChild(Line);
        issueContainer.appendChild(DeleteBtn);

        issueContainer.setAttribute('class', "issueContainer");


        Container.appendChild(issueContainer);


    }

    newDescriptionsArray = new Array();
    newUsersArray = new Array();
    newPriorityArray = new Array();
}

function DeleteIssue(i) {
    let Container = document.getElementById("curent_issues");
    let curentIssue = document.getElementById("issue" + i);
    let verrify = confirm("Are you sure you want to delete this?");
    if (verrify)
        Container.removeChild(curentIssue);
}
const options = {
  bottom: '540px', // default: '32px'
  right: '32px', // default: '32px'
  left: 'unset', // default: 'unset'
  time: '0.2s', // default: '0.3s'
  mixColor: '#A9A9A9', // default: '#fff'
  backgroundColor: '#f0f5ff',  // default: '#fff'
  buttonColorDark: '#100f2c',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: true, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true // default: true
}
const darkmode = new Darkmode(options);
darkmode.showWidget();





