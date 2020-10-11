export class DomListener {
  constructor($root) {
    if (!$root) throw new Error('no $root element')

    this.$root = $root
  }
}
