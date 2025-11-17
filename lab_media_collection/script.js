
        const tankDataJSON = `
        [
            { "name": "M4 Easy 8",
              "nationality": "USA",
              "year": 1944,
              "type": "Medium tank",
              "thumbnail": "images/M4_EASY_8.jpg"
            },
            { "name": "Churchill Mk 7",
              "nationality": "Britian",
              "year": 1944,
              "type": "Heavy tank",
              "thumbnail": "images/CHURCHILL_MK7.jpg"
            },
            { "name": "Cromwell",
              "nationality": "Britian",
              "year": 1943,
              "type": "Meduim tank",
              "thumbnail": "images/CROMEWELL.jpg"
            },
            { "name": "JagPanzer38T",
              "nationality": "Germany",
              "year": 1944,
              "type": "Tank destroyer",
              "thumbnail": "images/JAGPANZER38T.jpg"
            },
            { "name": "KV 2",
              "nationality": "Russia",
              "year": 1940,
              "type": "SPG",
              "thumbnail": "images/KV_2.jpg"
            },
            { "name": "M3 Stuart",
              "nationality": "USA",
              "year": 1941,
              "type": "Light tank",
              "thumbnail": "images/M3_STEWART.jpg"
            },
            { "name": "M8 Greyhound",
              "nationality": "USA",
              "year": 1943,
              "type": "Armored car",
              "thumbnail": "images/M8_GREYHOUND.jpg"
            },
            { "name": "M18 Hellcat",
              "nationality": "USA",
              "year": 1943,
              "type": "Tank destroyer",
              "thumbnail": "images/M18_HELLCAT.jpg"
            },
            { "name": "M32B",
              "nationality": "USA",
              "year": 1943,
              "type": "Tank destroyer",
              "thumbnail": "images/M32B.jpg"
            },
            { "name": "M41 Bulldog",
              "nationality": "USA",
              "year": 1951,
              "type": "Light tank",
              "thumbnail": "images/M41_BULLDOG.jpg"
            },
            { "name": "M48 Patton",
              "nationality": "USA",
              "year": 1953,
              "type": "MBT",
              "thumbnail": "images/M48_PATTON.jpg"
            },
            { "name": "Mark 5",
              "nationality": "Britian",
              "year": 1918,
              "type": "Landship",
              "thumbnail": "images/MARK_5.jpg"
            },
            { "name": "Maus",
              "nationality": "Germany",
              "year": 1945,
              "type": "Heavy tank",
              "thumbnail": "images/MAUS.jpg"
            },
            { "name": "Panther",
              "nationality": "Germany",
              "year": 1942,
              "type": "Medium tank",
              "thumbnail": "images/PANTHER.jpg"
            },
            { "name": "Panzer 4",
              "nationality": "Germany",
              "year": 1937,
              "type": "Medium tank",
              "thumbnail": "images/PANZER_4.jpg"
            },
            { "name": "STUG 4",
              "nationality": "Germany",
              "year": 1943,
              "type": "Assault gun",
              "thumbnail": "images/STUG_4.jpg"
            },
            { "name": "T-55",
              "nationality": "Ruissa",
              "year": 1958,
              "type": "MBT",
              "thumbnail": "images/T_55.jpg"
            },
            { "name": "T-34-85",
              "nationality": "Russia",
              "year": 1944,
              "type": "Medium tank",
              "thumbnail": "images/T-34-85.jpg"
            },
            { "name": "Type 97",
              "nationality": "Japan",
              "year": 1938,
              "type": "Light tank",
              "thumbnail": "images/TYPE_97.jpg"
            }


        ]
        `;

        class Tank {
            #year;

            constructor(name, nationality, year, type, thumbnail) {
                this.name = name;
                this.nationality = nationality;
                this.year = year;
                this.type = type;
                this.thumbnail = thumbnail
            }

            get year() {
                return this.#year
            }

            set year(value) {
                if (value < 0) {
                    console.log(`Invalid year "${value}" - setting to 1900 instead.`);
                    this.#year = 1900;
                } else {
                    this.#year = value
                }
            }

            set name(value) {
                if (value.length > 20) {
                    console.log(`Name too long, trimming to 20 chars: ${value}`);
                    this._name = value.substring(0, 20);
                } else {
                    this._name = value;
                }
            }

            get name() {
                return this._name
            }

            toString() {
                return `${this.name} (${this.year}) - ${this.type}, ${this.nationality}`;
            }

            toHTMLElement() {
                const card = document.createElement("div");
                card.classList.add("tank-card");

                card.innerHTML = `
                    <h3>${this.name}</h3>
                    <img src="${this.thumbnail}" width="200">
                    <p>Nationality: ${this.nationality}</p>
                    <p>Year: ${this.year}</p>
                    <p>Type: ${this.type}</p>
                `;

                return card;
            }
        }

        const tanksData = JSON.parse(tankDataJSON);

    
        const container = document.getElementById("media-container");
        
        tanksData.forEach(data => {
            const tank = new Tank(
                data.name,
                data.nationality,
                data.year,
                data.type,
                data.thumbnail
            );

            container.appendChild(tank.toHTMLElement());
        })