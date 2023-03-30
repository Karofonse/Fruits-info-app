return (
    <div>
        {items.map((item) => (
            <li key={item.id} onClick={() => handleItemClick(item.id)}>
            {item.nombre} - {item.descripcion}
            </li>
        ))}
        </div>
);