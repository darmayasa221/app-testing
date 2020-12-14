import React from 'react'
import App from './App'
import { shallow } from 'enzyme'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
configure({adapter : new Adapter()})

describe('App', ()=>{
  let addWrapper;
  beforeAll(()=>{
    addWrapper = shallow(<App/>)
  })

  it ('user kosong',() =>{
    addWrapper.find('button').simulate('click',{target:{name:{value:''}}})

  })
  it("user tidak boleh kosong !", () => {
    const onMock = jest.fn();
    const wrap = shallow(<App onClick={onMock} />);
    const user = wrap.find("#user");
    user.simulate("change", { target: { value:""} });
    const button = wrap.find("button");
    button.simulate("submit");
    expect(onMock).not.toHaveBeenCalled()
  });
    // addWrapper.find('button').simulate('click')
    // const onMock = jest.fn()
    // const pdSpy = jest.fn()
    // addWrapper.shallow(<App onSubmit={onMock}/>)
    //  addWrapper.find('button').simulate('click')
    // expect(pdSpy).not.toHaveBeenCalled()
    // expect(onMock).toHaveBeenCalled()
  // // it('test',()=>{
  // //    addWrapper.find(PersonList);
  // // })

  // // it('satet',()=>{
  // //   const stateNotNull  = addWrapper.state();
  // //   expect(stateNotNull).not.toBeNull();
  // // })

  // // it('has a test propperty on state', () =>{
  // //   const appState = addWrapper.state();
  // //   expect(appState.test).toBeDefined()

  // // } )

  // // it('passes test property of state to personList as prop', () =>{
  // //   const list = addWrapper.find(PersonList);
  // //   expect(list.props().test).toEqual(addWrapper.state().test, console.log(test))
  // // })

  // it('mengembalikan merah jika nilai 1-5 ', () =>{
  //   const lampu = App.prototype.ceklampu(1);
  //   expect(lampu).toBe('merah')
  // })
  // it('mengembalikan merah jika nilai 1-5', () =>{
  //   const lampu = App.prototype.ceklampu(2);
  //   expect(lampu).toBe('merah')
  // })
  // it('mengembalikan merah jika nilai 1-5 ', () =>{
  //   const lampu = App.prototype.ceklampu(3);
  //   expect(lampu).toBe('merah')
  // })
  // it('mengembalikan merah jika nilai 1-5 ', () =>{
  //   const lampu = App.prototype.ceklampu(4);
  //   expect(lampu).toBe('merah')
  // })
  // it('mengembalikan merah jika nilai 1-5 ', () =>{
  //   const lampu = App.prototype.ceklampu(5);
  //   expect(lampu).toBe('merah')
  // })
  // it('mengembalikan kuning jika nilai 6-9 ', () =>{
  //   const lampu = App.prototype.ceklampu(6);
  //   expect(lampu).toBe('kuning')
  // })
  // it('mengembalikan kuning jika nilai 6-9 ', () =>{
  //   const lampu = App.prototype.ceklampu(7);
  //   expect(lampu).toBe('kuning')
  // })
  // it('mengembalikan kuning jika nilai 6-9 ', () =>{
  //   const lampu = App.prototype.ceklampu(8);
  //   expect(lampu).toBe('kuning')
  // })
  // it('mengembalikan kuning jika nilai 6-9 ', () =>{
  //   const lampu = App.prototype.ceklampu(9);
  //   expect(lampu).toBe('kuning')
  // })
  // it('mengembalikan hijau jika nilai 10 ', () =>{
  //   const lampu = App.prototype.ceklampu(10);
  //   expect(lampu).toBe('hijau')
  // })
  // it('mengembalikan hijau jika nilai 11 ', () =>{
  //   const lampu = App.prototype.ceklampu(11);
  //   expect(lampu).toBe('hijau')
  // })
})