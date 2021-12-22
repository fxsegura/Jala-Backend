import Lamp from './lamp';
import Button from './button';
import Television from './television';

const lamp = new Lamp();
const tv= new Television();
const button = new Button(lamp);
const btnTV=new Button(tv);
button.onButtonListener();
button.onButtonListener();
btnTV.onButtonListener();
btnTV.onButtonListener();