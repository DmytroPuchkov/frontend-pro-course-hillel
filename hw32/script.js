const history = {
  records: [],
  add(item) {
    if (item) {
      this.records.push(item);
    }
  },

  draw() {
    let html = "<ol>";
    html += this.records
      .map((record) => "<li>" + JSON.stringify(record) + "</li>")
      .join("");
    html += "</ol>";

    document.write(html);
  },
};

const shape = {
  props: Object.seal({
    left: 100,
    right: 200,
    top: 100,
    bottom: 400,
  }),
  lastPropsTotal: null,
  lastPropsState: "",

  calc() {
    return Object.values(this.props).reduce((accum, item) => accum + item, 0);
  },

  get perimeter() {
    const currentPropsState = JSON.stringify(this.props);

    if (this.lastPropsState !== currentPropsState) {
      const total = this.calc();

      history.add({
        total: total,
        props: Object.assign({}, this.props),
      });

      this.lastPropsTotal = total;
      this.lastPropsState = currentPropsState;
    }

    return this.lastPropsTotal;
  },
};

shape.props.foo = "aaa";

shape.perimeter;

shape.props.right = 600;
shape.perimeter;

shape.props.right = 680;
shape.perimeter;

shape.perimeter;

shape.props.right = 700;
shape.props.top = 150;
shape.props.bottom = 450;
shape.props.left = 120;

shape.perimeter;

console.log(shape.props);
console.log(history.records);

history.draw();