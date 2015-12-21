require('Common');

var win = new Window();
win.width = 500;
win.height = 300;

var normal = new Button();
normal.title = 'normal';
normal.left = 5;
normal.top = 5;

var normalDisabled = new Button();
normalDisabled.title = 'normal disabled';
normalDisabled.left = 65;
normalDisabled.top = 5;
normalDisabled.enabled = false;

var toggleOn = new Button();
toggleOn.type = 'toggle';
toggleOn.title = 'toggle on';
toggleOn.left = 5;
toggleOn.top = 35;
toggleOn.state = true;

var toggleOnDisabled = new Button();
toggleOnDisabled.type = 'toggle';
toggleOnDisabled.title = 'toggle on disabled';
toggleOnDisabled.enabled = false;
toggleOnDisabled.left = 155;
toggleOnDisabled.top = 35;
toggleOnDisabled.state = true;

var toggleOff = new Button();
toggleOff.type = 'toggle';
toggleOff.title = 'toggle off';
toggleOff.left = 80;
toggleOff.top = 35;
toggleOff.state = false;

var toggleOffDisabled = new Button();
toggleOffDisabled.type = 'toggle';
toggleOffDisabled.title = 'toggle off disabled';
toggleOffDisabled.left = 280;
toggleOffDisabled.top = 35;
toggleOffDisabled.state = false;
toggleOffDisabled.enabled = false;

var checkboxChecked = new Button();
checkboxChecked.type = 'checkbox';
checkboxChecked.left = 5;
checkboxChecked.top = 60;
checkboxChecked.state = true;

var checkboxNotChecked = new Button();
checkboxNotChecked.type = 'checkbox';
checkboxNotChecked.left = 25;
checkboxNotChecked.top = 60;

var checkboxCheckedDisabled = new Button();
checkboxCheckedDisabled.type = 'checkbox';
checkboxCheckedDisabled.left = 45;
checkboxCheckedDisabled.top = 60;
checkboxCheckedDisabled.state = true;
checkboxCheckedDisabled.enabled = false;

var checkboxNotCheckedDisabled = new Button();
checkboxNotCheckedDisabled.type = 'checkbox';
checkboxNotCheckedDisabled.left = 65;
checkboxNotCheckedDisabled.top = 60;
checkboxNotCheckedDisabled.enabled = false;

var radioSelected = new Button();
radioSelected.type = 'radio';
radioSelected.left = 5;
radioSelected.top = 85;
radioSelected.state = true;

var radioNotSelected = new Button();
radioNotSelected.type = 'radio';
radioNotSelected.left = 25;
radioNotSelected.top = 85;

var radioSelectedDisabled = new Button();
radioSelectedDisabled.type = 'radio';
radioSelectedDisabled.left = 45;
radioSelectedDisabled.top = 85;
radioSelectedDisabled.state = true;
radioSelectedDisabled.enabled = false;

var radioNotSelectedDisabled = new Button();
radioNotSelectedDisabled.type = 'radio';
radioNotSelectedDisabled.left = 65;
radioNotSelectedDisabled.top = 85;
radioNotSelectedDisabled.enabled = false;

var buttonImage = new Button();
buttonImage.image = 'feed-icon.png';
buttonImage.top = 110;
buttonImage.left = 5;
buttonImage.height = 26;
buttonImage.width = 26;

var buttonImageDisabled = new Button();
buttonImageDisabled.image = 'feed-icon.png';
buttonImageDisabled.top = 110;
buttonImageDisabled.left = 36;
buttonImageDisabled.height = 26;
buttonImageDisabled.width = 26;
buttonImageDisabled.enabled = false;

win.appendChild([
    normal,
    normalDisabled,
    toggleOn,
    toggleOnDisabled,
    toggleOff,
    toggleOffDisabled,
    checkboxChecked,
    checkboxCheckedDisabled,
    checkboxNotChecked,
    checkboxNotCheckedDisabled,
    radioSelected,
    radioSelectedDisabled,
    radioNotSelected,
    radioNotSelectedDisabled,
    buttonImage,
    buttonImageDisabled
]);
win.visible = true;
