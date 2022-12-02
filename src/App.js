import './App.css';
import Nav from './components/nav.component';
import NewItem from './components/new-item.component';
import Grid from './components/grid.component';
import Footer from './components/footer.component';

const App = () =>  {
  let items = [
    {
      title: 'Study',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem',
      priority: 'High',
    }, 
    {
      title: 'Gym',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem',
      priority: 'Medium',
    },
    {
      title: 'Sleep',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem',
      priority: 'High',
    },
    {
      title: 'Eat',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem',
      priority: 'High',
    },
    {
      title: 'Eat',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem',
      priority: 'High',
    },
    {
      title: 'Eat',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem',
      priority: 'High',
    },
    {
      title: 'Eat',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem',
      priority: 'High',
    },
    {
      title: 'Eat',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem',
      priority: 'High',
    },
    {
      title: 'Eat',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem',
      priority: 'High',
    },
    {
      title: 'Eat',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem',
      priority: 'High',
    },
    {
      title: 'Eat',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem',
      priority: 'High',
    },
  ]
  return (
    <div className="App">
      <Nav links={['Home', 'Login', 'Logout']} brandName='todo'/>
      <NewItem/>
      <Grid items={items}/>
      <Footer text={'© AHMED KHALED'}/>
    </div>
  );
}

export default App;
