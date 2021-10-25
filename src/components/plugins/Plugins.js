const Plugins = (props) => {
  const plugins = [
    {
      title: "Sample plugin",
      amount: 300,
      orderDate: "01/01/2021",
      expireDate: "01/01/2022",
      status: "active",
    },
  ];

  return (
    <div id="plugins" className="box">
      <div className="block entry-title">
        <h4 className="title">Plugins</h4>
      </div>
      <table className="table">
        {plugins.map((plugin, index) => {
          return (
            <tbody key={index}>
              <tr>
                <td>
                  <h5>Plugin:</h5>
                </td>
                <td>
                  <p>{plugin.title}</p>
                </td>
                <td>
                  <h5>Price:</h5>
                </td>
                <td>
                  <p>{`$${plugin.amount}`}</p>
                </td>

                <td>
                  <h5>Order Date:</h5>
                </td>
                <td>
                  <p>{plugin.orderDate}</p>
                </td>
                <td>
                  <h5>Renewal Date:</h5>
                </td>
                <td>
                  <p>{plugin.expireDate}</p>
                </td>
                <td>
                  <h5>Status:</h5>
                </td>
                <td>
                  <p>{plugin.status}</p>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default Plugins;
