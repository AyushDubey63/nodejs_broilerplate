import { User } from "../model/User.js"

export const fetchAllUsers = async (req, res) => {
  try {
    const users = await User.find({})
    res.status(200).json(users)
  } catch (error) {
    res.status(400).json(error)
  }
}

export const createUser = async (req, res) => {
  try {
    const user = await new User(req.body)
    const data = await user.json()
    res.status(201).json(data)
  } catch (error) {
    res.status(400).json(error)
  }
}
export const checkUser = async (req, res) => {
  const { email,password } = req.body;
  console.log(email,password)
  try {
    const user = await User.findById(email);
    const data = await user.json();
    if(data.length){
      if (password === data[0].password) {
        // console.log(data[[0]])
        res.status(200).json({data:data[0]})
      } else {
        res.status(400).json({message:'wrong creadentials'})
      }
    }else {
      res.status(404).json({message:"user not found"})
    }
  } catch (err) {
    res.status(400).json(err);
  }
};



export const updateUser = async (req, res) => {
  const {id} = req.params
  try {
    const user = await User.findByIdAndUpdate(id,req.body,{new : true})
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json(error)
  }
}