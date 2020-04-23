import React from "react";

class App extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>都道府県</th>
            <th>市町村</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>北海道</td>
            <td>釧路市</td>
          </tr>
          <tr>
            <td>東京都</td>
            <td>八王子市</td>
          </tr>
          <tr>
            <td>沖縄県</td>
            <td>那覇市</td>
          </tr>
          <tr>
            <td>静岡県</td>
            <td>熱海市</td>
          </tr>
          <tr>
            <td>神奈川県</td>
            <td>横浜市</td>
          </tr>
          <tr>
            <td>福井県</td>
            <td>福井市</td>
          </tr>
          <tr>
            <td>富山県</td>
            <td>富山市</td>
          </tr>
          <tr>
            <td>石川県</td>
            <td>金沢市</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default App;
