import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import '../styles/components/dropdown.css';

function BasicButtonExample() {

  return (
    <DropdownButton id="dropdown-basic-button" title="Menu">
      <Dropdown.Item class="dropdown-item" href="#design">The Design</Dropdown.Item>
      <Dropdown.Item class="dropdown-item" href="#gallery">Gallery</Dropdown.Item>
      <Dropdown.Item class="dropdown-item" href="#pricing">Pricing</Dropdown.Item>
      <Dropdown.Item class="dropdown-item" href="#contact">Contact</Dropdown.Item>
    </DropdownButton>
  );
}

export default BasicButtonExample;
