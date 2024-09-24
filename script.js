let users = [
    {
      photo: "https://randomuser.me/api/portraits/men/2.jpg",
      name: "Perry Fowler",
      email: "perry.fowler@example.com",
      cardColor: "#ff8c7f",
    },
    {
      photo: "https://randomuser.me/api/portraits/women/9.jpg",
      name: "Loretta Butler",
      email: "loretta.butler@example.com",
      cardColor: "#4ff18e",
    },
    {
      photo: "https://randomuser.me/api/portraits/women/39.jpg",
      name: "Charlotte Ward",
      email: "charlotte.ward@example.com",
      cardColor: "#4f65f1",
    },
];

users.forEach(user => {
    let card = document.createElement('div');
    card.className = 'card';
    Object.assign(card.style, {
        backgroundColor: user.cardColor,
        margin: '0.8rem',
        width: '350px',
        textAlign: 'center',
        padding: '0.5rem'
    });

    let username = document.createElement('h2');
    username.textContent = user.name;
    card.append(username);

    let photo = document.createElement('img');
    photo.src = user.photo;
    Object.assign(photo.style, {
        border: '10px solid white',
        borderRadius: '50%'
    });
    card.append(photo);

    let email = document.createElement('p');
    email.textContent = user.email;
    card.append(email);

    document.body.append(card);
})