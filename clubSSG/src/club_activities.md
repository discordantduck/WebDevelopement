<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="club.css">
    <script src="eventData.js"></script>
    <title>Club Activities</title>
</head>

<header>
    <h1>Activity Schedule</h1>
</header>

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody id="activity_table"></tbody>
</table>

<script>
    let tbody = document.getElementById("activity_table");

    events.forEach(function(events)
    {
        let tr = document.createElement("tr");
        let content = `<td>${events.name}</td><td>${events.date}</td><td>${events.description}</td>`;
        tr.innerHTML = content;
        tbody.appendChild(tr);
    })
</script>