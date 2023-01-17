# Best refactoring practice

- The first thing I considered when refactoring this code is divide parts of the
  lengthty updateQaulity method into separate meaninful methods.

  - Each method contains less than 10 line of code.
  - Having small size methods would improve code readabiliy, and make the code
    clear and maintainable.
  - In addition, it would help to avoid code redundancy, and when there is a
    need to update a piece of code, it can be done only in one place.
  - I tried to make the names of the methods as descriptive as possible or I
    added inline comments

- I created properties for the names that are used in the conditional
  comparison. The idea is the same; when there is a need to update, it can be
  done in one place.
