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
  lastCondition: null,

  calc() {
    return Object.values(this.props).reduce((accum, item) => accum + item, 0);
  },

  get perimeter() {
    const total = this.calc();

    if (this.lastCondition !== total) {
      history.add({
        total: total,
        props: Object.assign({}, this.props),
      });

      this.lastCondition = total;
    }

    return total;
  },
};

shape.perimeter;

shape.props.right = 600;

shape.perimeter;

shape.props.right = 800;

shape.perimeter;
shape.perimeter;

shape.props.left = 900;

shape.perimeter;
shape.perimeter;

shape.props.foo = "aaa";

console.log(shape.props);
console.log(history.records);

history.draw();