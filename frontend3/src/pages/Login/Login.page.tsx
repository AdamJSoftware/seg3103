import React, {useState} from 'react';
import {Card, Input, Button, Space } from "@mantine/core";
import { useNavigate } from 'react-router';


const Login = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
    return <div style={{height: "90vh", display: "flex"}}>
    <div style={{ width: 512, margin: 'auto' }}>
      <Card shadow="sm"  style={
          {
              padding: "40px"
            }
        }>
        <Card.Section>
          <h1>Login</h1>
          {error && <p>{error}</p>}
        </Card.Section>
        <Card.Section>
          <Input placeholder="username" value={username} onChange={(e) => {
                setUsername(e.target.value)
            }} />
          <Space h="lg" />
          <Input type="password" placeholder="password" value={password} onChange={(e) => {
              setPassword(e.target.value)
            }} />

          <Space h="xl" />
          <Button onClick={() => {
              if(username == "admin" && password == "1234") {
                  navigate("/")
                } else {
                    setError("Invalid Credentials")
                  }
            }}>Login</Button>
        </Card.Section>
      
      </Card>
      </div>
    </div>

  };

export default Login;
