import React from 'react'
import {fireEvent, render } from '@testing-library/react'
import App from './App'
import { act } from 'react-dom/test-utils'


describe('call Function',()=>{
  it('input user',()=>{
    const mockSubSpy = jest.fn()
    const { queryByTitle, }  = render(<App onSubmit={mockSubSpy}/>)
    const sub = queryByTitle('submit')
    const user = queryByTitle('user')
    const pass = queryByTitle('password')
    act(()=>{    
      fireEvent.change(user,{target:{value:'a'}})
      fireEvent.change(pass,{target:{value:'aa'}})
      expect(user.value).toBe('a')
      expect(pass.value).toBe('aa')
      })
    act(()=>{
      fireEvent.submit(sub)
    })
    expect(mockSubSpy).toBeCalledTimes(1)
  })
})



  // it('when pressing the submit button',() => {
  //   const mockOnSubmit = jest.fn()
  //   const {getByTitle} = render(<App onSubmit={mockOnSubmit} />)

  //   act(()=>{
  //    fireEvent.change(getByTitle('user'),{target:{value:''}})
  //   })

  //   act(() =>{
  //     fireEvent.submit(getByTitle('submit'))
  //   })
  //   console.log(mockOnSubmit)
  //   expect(mockOnSubmit).toBeCalled()
  // })

  // it('if username null',() =>{
  //   const mockSub = jest.fn()
  //   const {getByTitle} = render(<App onSubmit/>)
  //   const submit = getByTitle('submit')
  //   const user = getByTitle('user')
 
 
  //       fireEvent.change(user,{target:{value:''}})


  //       fireEvent.submit(submit)

  //   expect(user.value).toBe('gagal')
  // })
// })


// import {mount} from "enzyme"
// describe('App', ()=>{
//   let addWrapper;
//   beforeAll(()=>{
//     addWrapper = mount(<App/>)
//   })w
// })

//   it ('user kosong',() =>{
//     addWrapper.find('button').simulate('click',{target:{name:{value:''}}})

//   })
//   it("user tidak boleh kosong !", () => {
//     const onMock = jest.fn();
//     const wrap = shallow(<App onClick={onMock} />);
//     const user = wrap.find("#user");
//     user.simulate("change", { target: { value:""} });
//     const button = wrap.find("button");
//     button.simulate("submit");
//     expect(onMock).not.toHaveBeenCalled()
//   });
//   //   addWrapper.find('button').simulate('click')
//   //   const onMock = jest.fn()
//   //   const pdSpy = jest.fn()
//   //   addWrapper.shallow(<App onSubmit={onMock}/>)
//   //    addWrapper.find('button').simulate('click')
//   //   expect(pdSpy).not.toHaveBeenCalled()
//   //   expect(onMock).toHaveBeenCalled()
//   // // it('test',()=>{
//   // //    addWrapper.find(PersonList);
//   // // })

//   // // it('satet',()=>{
//   // //   const stateNotNull  = addWrapper.state();
//   // //   expect(stateNotNull).not.toBeNull();
//   // // })

//   // // it('has a test propperty on state', () =>{
//   // //   const appState = addWrapper.state();
//   // //   expect(appState.test).toBeDefined()

//   // // } )

//   // // it('passes test property of state to personList as prop', () =>{
//   // //   const list = addWrapper.find(PersonList);
//   // //   expect(list.props().test).toEqual(addWrapper.state().test, console.log(test))
//   // // })

//   // it('mengembalikan merah jika nilai 1-5 ', () =>{
//   //   const lampu = App.prototype.ceklampu(1);
//   //   expect(lampu).toBe('merah')
//   // })
//   // it('mengembalikan merah jika nilai 1-5', () =>{
//   //   const lampu = App.prototype.ceklampu(2);
//   //   expect(lampu).toBe('merah')
//   // })
//   // it('mengembalikan merah jika nilai 1-5 ', () =>{
//   //   const lampu = App.prototype.ceklampu(3);
//   //   expect(lampu).toBe('merah')
//   // })
//   // it('mengembalikan merah jika nilai 1-5 ', () =>{
//   //   const lampu = App.prototype.ceklampu(4);
//   //   expect(lampu).toBe('merah')
//   // })
//   // it('mengembalikan merah jika nilai 1-5 ', () =>{
//   //   const lampu = App.prototype.ceklampu(5);
//   //   expect(lampu).toBe('merah')
//   // })
//   // it('mengembalikan kuning jika nilai 6-9 ', () =>{
//   //   const lampu = App.prototype.ceklampu(6);
//   //   expect(lampu).toBe('kuning')
//   // })
//   // it('mengembalikan kuning jika nilai 6-9 ', () =>{
//   //   const lampu = App.prototype.ceklampu(7);
//   //   expect(lampu).toBe('kuning')
//   // })
//   // it('mengembalikan kuning jika nilai 6-9 ', () =>{
//   //   const lampu = App.prototype.ceklampu(8);
//   //   expect(lampu).toBe('kuning')
//   // })
//   // it('mengembalikan kuning jika nilai 6-9 ', () =>{
//   //   const lampu = App.prototype.ceklampu(9);
//   //   expect(lampu).toBe('kuning')
//   // })
//   // it('mengembalikan hijau jika nilai 10 ', () =>{
//   //   const lampu = App.prototype.ceklampu(10);
//   //   expect(lampu).toBe('hijau')
//   // })
//   // it('mengembalikan hijau jika nilai 11 ', () =>{
//   //   const lampu = App.prototype.ceklampu(11);
//   //   expect(lampu).toBe('hijau')
//   // })
// })