

export const generateUserRequest = async (str) => {
    let newContact
    try {
        const res = await fetch(`https://randomuser.me/api/?seeds=${str}`, {
        mathos: "GET",
        cors: 'cors'
      })

      let data = await res.json();
      if (data) {
        newContact = {
          userName: str, firstName: data.results[0].name.first, lastName: data.results[0].name.last,
          email: data.results[0].email
        }
      }
      return newContact
    }
    catch (err) {
      console.log("oopsss...error", err.message)
      return
    }
  }