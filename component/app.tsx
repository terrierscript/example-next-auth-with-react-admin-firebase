import React from "react"
import { Admin, Resource, ListGuesser,DataProvider } from "react-admin"
import {
  FirebaseDataProvider,
} from "react-admin-firebase"
import { firebaseConfig } from "./firebaseConfig"

const dataProvider = FirebaseDataProvider(firebaseConfig, {})
const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
     <Resource name="users" list={ListGuesser} />
    </Admin>
  )
}

export default App