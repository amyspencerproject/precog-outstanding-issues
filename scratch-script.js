// from the first drag and drop table example
<script>
let row;
function start() {
  row = event.target;
}
function dragover() {
  let e = event;
  e.preventDefault();

  let children = Array.from(e.target.parentNode.parentNode.children);
  if (children.indexOf(e.target.parentNode) > children.indexOf(row))
    e.target.parentNode.after(row);
  else e.target.parentNode.before(row);
}
</script>