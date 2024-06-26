// JavaScript should be written in ECMAScript 5.1.

function main() {
  console.log(
    JSON.stringify(
      {
        title: 'RK61 Keyboard Mac Fix: Tilde and Slash Key Remapping',
        maintainers:['juan-28'],
        rules: [
          {
            description: 'right_shift + esc → ~',
            manipulators: [
              {
                type: 'basic',
                from: {
                  key_code: 'escape',
                  modifiers: {
                    mandatory: ['right_shift'],
                    optional: ['any'],
                  },
                },
                to: [
                  {
                    key_code: 'grave_accent_and_tilde',
                    modifiers: ['left_shift'],
                  },
                ],
              },
            ],
          },
          {
            description: 'up_arrow turn to slash when press with left_command',
            manipulators: [
              {
                type: 'basic',
                from: {
                  key_code: 'up_arrow',
                  modifiers: {
                    mandatory: ['left_command'],
                    optional: ['any'],
                  },
                },
                to: [
                  {
                    key_code: 'slash',
                  },
                ],
              },
            ],
          },
        ],
      },
      null,
      '  '
    )
  );
}

main();

