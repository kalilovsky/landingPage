// C'est une classe crée pour faciliter le dessin en 2D en version 3D de formes géométriques complexes

class formeGeometrique {

   constructor(posX, posY, posZ, heightF, widthF, depthF, ctx) {
      this.posX = 0;
      this.posY = 0;
      this.posZ = 0;
      this.xProj = posX;
      this.yProj = posY;
      this.zProj = posZ;
      this.heightF = heightF;
      this.widthF = widthF;
      this.depthF = depthF;
      this.ctx = ctx;
   }

   createCube() {
      this.nodes = [[this.posX, this.posY, this.posY],
      [this.posX, this.posY, this.posY + this.depthF],
      [this.posX, this.posY + this.heightF, this.posY],
      [this.posX, this.posY + this.heightF, this.posY + this.depthF],
      [this.posX + this.widthF, this.posY, this.posY],
      [this.posX + this.widthF, this.posY, this.posY + this.depthF],
      [this.posX + this.widthF, this.posY + this.heightF, this.posY],
      [this.posX + this.widthF, this.posY + this.heightF, this.posY + this.depthF]];

      this.edges = [[0, 1], [1, 3], [3, 2], [2, 0],
      [4, 5], [5, 7], [7, 6], [6, 4],
      [0, 4], [1, 5], [2, 6], [3, 7]];

      //this.forme = { 'nodes': nodes, 'edges': edges};

   };
   createToroidal() {
      let d = this.depthF;
      let onze = 11 * d;
      let cinq = 5 * d;
      let sept = 7 * d;
      let un = 1 * d;
      this.nodes = [[-onze + this.posX, cinq + this.posY, onze + this.posZ],
      [-onze + this.posX, -cinq + this.posY, onze + this.posZ],
      [onze + this.posX, -onze + this.posY, cinq + this.posZ],
      [onze + this.posX, -onze + this.posY, -cinq + this.posZ],
      [cinq + this.posX, onze + this.posY, -onze + this.posZ],
      [-cinq + this.posX, onze + this.posY, -onze + this.posZ],
      [-sept + this.posX, cinq + this.posY, onze + this.posZ],
      [onze + this.posX, -sept + this.posY, cinq + this.posZ],
      [cinq + this.posX, onze + this.posY, -sept + this.posZ],
      [-cinq + this.posX, sept + this.posY, -onze + this.posZ],
      [-onze + this.posX, -cinq + this.posY, sept + this.posZ],
      [sept + this.posX, -onze + this.posY, -cinq + this.posZ],
      [-sept + this.posX, -un + this.posY, onze + this.posZ],
      [onze + this.posX, -sept + this.posY, -un + this.posZ],
      [-un + this.posX, onze + this.posY, -sept + this.posZ],
      [un + this.posX, sept + this.posY, -onze + this.posZ],
      [-onze + this.posX, un + this.posY, sept + this.posZ],
      [sept + this.posX, -onze + this.posY, un + this.posZ],
      [cinq + this.posX, -cinq + this.posY, onze + this.posZ],
      [cinq + this.posX, -cinq + this.posY, -onze + this.posZ],
      [onze + this.posX, cinq + this.posY, -cinq + this.posZ],
      [-onze + this.posX, cinq + this.posY, -cinq + this.posZ],
      [-cinq + this.posX, onze + this.posY, cinq + this.posZ],
      [-cinq + this.posX, -onze + this.posY, cinq + this.posZ],
      [cinq + this.posX, -un + this.posY, onze + this.posZ],
      [onze + this.posX, cinq + this.posY, -un + this.posZ],
      [-un + this.posX, onze + this.posY, cinq + this.posZ],
      [un + this.posX, -cinq + this.posY, -onze + this.posZ],
      [-onze + this.posX, un + this.posY, -cinq + this.posZ],
      [-cinq + this.posX, -onze + this.posY, un + this.posZ],
      [-sept + this.posX, un + this.posY, sept + this.posZ],
      [-sept + this.posX, -un + this.posY, sept + this.posZ],
      [sept + this.posX, -sept + this.posY, un + this.posZ],
      [sept + this.posX, -sept + this.posY, -un + this.posZ],
      [un + this.posX, sept + this.posY, -sept + this.posZ],
      [-un + this.posX, sept + this.posY, -sept + this.posZ],
      [cinq + this.posX, -un + this.posY, -sept + this.posZ],
      [-sept + this.posX, cinq + this.posY, -un + this.posZ],
      [-un + this.posX, -sept + this.posY, cinq + this.posZ],
      [un + this.posX, -cinq + this.posY, sept + this.posZ],
      [sept + this.posX, un + this.posY, -cinq + this.posZ],
      [-cinq + this.posX, sept + this.posY, un + this.posZ],
      [un + this.posX, -un + this.posY, sept + this.posZ],
      [un + this.posX, -un + this.posY, -sept + this.posZ],
      [sept + this.posX, un + this.posY, -un + this.posZ],
      [-sept + this.posX, un + this.posY, -un + this.posZ],
      [-un + this.posX, sept + this.posY, un + this.posZ],
      [-un + this.posX, -sept + this.posY, un + this.posZ]]



      this.edges = [[0, 1], [1, 18], [18, 24], [24, 12], [12, 6],
      [0, 6], [6, 37], [37, 24], [24, 12], [12, 6],
      [0, 21], [21, 28], [28, 16], [16, 10], [10, 1],
      [3, 2], [2, 23], [23, 29], [29, 17], [17, 11],
      [3, 11], [11, 40], [40, 28], [28, 21], [21, 20],
      [3, 20], [20, 25], [25, 13], [13, 7], [7, 2],
      [19, 4], [4, 8], [8, 36], [36, 24], [24, 18],
      [19, 18], [18, 1], [1, 10], [10, 39], [39, 27],
      [19, 27], [27, 15], [15, 9], [9, 5], [5, 4],
      [22, 5], [5, 9], [9, 41], [41, 29], [29, 23],
      [22, 23], [23, 2], [2, 7], [7, 38], [38, 26],
      [22, 26], [26, 14], [14, 8], [8, 4], [5, 4],
      [30, 16], [16, 28], [28, 40], [40, 44], [44, 45],
      [30, 45], [45, 37], [37, 6], [6, 12], [12, 31],
      [30, 31], [31, 42], [42, 39], [39, 10], [10, 16],
      [33, 13], [13, 25], [25, 37], [37, 45], [45, 44],
      [33, 44], [44, 40], [40, 11], [11, 17], [17, 32],
      [33, 32], [32, 47], [47, 38], [38, 7], [7, 13],
      [43, 34], [34, 15], [15, 27], [27, 39], [39, 42],
      [43, 42], [42, 31], [31, 12], [12, 24], [24, 36],
      [43, 36], [36, 8], [14, 35], [35, 34], [14, 8],
      [19, 27], [27, 15], [15, 9], [9, 5], [5, 4],
      [46, 35], [35, 14], [14, 26], [26, 38], [38, 47],
      [46, 47], [47, 32], [32, 17], [17, 29], [29, 41],
      [46, 41], [41, 9], [9, 15], [15, 34], [34, 35]]







   }
   createTetragonal() {
      let d = this.depthF
      let C0 = d * Math.sqrt(3) / 2
      let C1 = d * (2 + Math.sqrt(3)) / 4
      let C2 = d * (3 + 2 * Math.sqrt(3)) / 4
      let C3 = d * (2 + Math.sqrt(3)) / 2
      let cinq = 0.5 * d;
      let dix = 1 * d;

      this.nodes = [[dix + this.posX, +this.posY, cinq + +this.posZ],
      [dix + this.posX, +this.posY, -cinq + +this.posZ],
      [C3 + this.posX, +this.posY, +this.posZ],
      [cinq + this.posX, C0 + this.posY, cinq + this.posZ],
      [cinq + this.posX, C0 + this.posY, -cinq + this.posZ],
      [C1 + this.posX, C2 + this.posY, this.posZ],
      [cinq + this.posX, -C0 + this.posY, cinq + this.posZ],
      [cinq + this.posX, -C0 + this.posY, -cinq + this.posZ],
      [C1 + this.posX, -C2 + this.posY, +this.posZ],
      [-cinq + this.posX, C0 + this.posY, cinq + this.posZ],
      [-cinq + this.posX, C0 + this.posY, -cinq + this.posZ],
      [-C1 + this.posX, C2 + this.posY, +this.posZ],
      [-cinq + this.posX, -C0 + this.posY, cinq + this.posZ],
      [-cinq + this.posX, -C0 + this.posY, -cinq + this.posZ],
      [-C1 + this.posX, -C2 + this.posY, this.posZ],
      [-dix + this.posX, this.posY, cinq + this.posZ],
      [-dix + this.posX, this.posY, -cinq + this.posZ],
      [-C3 + this.posX, this.posY, this.posZ]]



      this.edges = [[0, 3], [3, 4], [4, 1],
      [0, 1], [1, 7], [7, 6],
      [1, 4], [4, 5], [5, 2],
      [1, 2], [2, 8], [8, 7],
      [2, 5], [5, 3], [3, 0],
      [2, 0], [0, 6], [6, 8],
      [9, 15], [15, 16], [16, 10],
      [9, 10], [10, 4], [4, 3],
      [10, 16], [16, 17], [17, 11],
      [10, 11], [11, 5], [5, 4],
      [11, 17], [17, 15], [15, 9],
      [11, 9], [9, 3], [3, 5],
      [12, 6], [6, 7], [7, 13],
      [12, 13], [13, 16], [16, 15],
      [13, 7], [7, 8], [8, 14],
      [13, 14], [14, 17], [17, 16],
      [14, 8], [8, 6], [6, 12],
      [14, 12], [12, 15], [15, 17]]


   }
   createQuasiRegular() {
      let C0 = 20 * (4 + Math.sqrt(2)) / 7;
      let C1 = Math.sqrt(2) * 20;
      let C2 = (2 + Math.sqrt(2)) * 20;

      this.nodes = [[this.posX, +this.posY, C2 + +this.posZ],
      [this.posX, +this.posY, -C2 + +this.posZ],
      [C2 + this.posX, +this.posY, +this.posZ],
      [-C2 + this.posX, +this.posY, +this.posZ],
      [this.posX, C2 + this.posY, +this.posZ],
      [this.posX, -C2 + this.posY, +this.posZ],
      [this.posX, +this.posY, C1 + this.posZ],
      [this.posX, +this.posY, -C1 + this.posZ],
      [C1 + this.posX, +this.posY, +this.posZ],
      [-C1 + this.posX, +this.posY, +this.posZ],
      [this.posX, C1 + this.posY, +this.posZ],
      [this.posX, -C1 + this.posY, +this.posZ],
      [C0 + this.posX, C0 + this.posY, C0 + this.posZ],
      [C0 + this.posX, C0 + this.posY, -C0 + this.posZ],
      [C0 + this.posX, -C0 + this.posY, C0 + this.posZ],
      [C0 + this.posX, -C0 + this.posY, -C0 + this.posZ],
      [-C0 + this.posX, C0 + this.posY, C0 + this.posZ],
      [-C0 + this.posX, C0 + this.posY, -C0 + this.posZ],
      [-C0 + this.posX, -C0 + this.posY, C0 + this.posZ],
      [-C0 + this.posX, -C0 + this.posY, -C0 + this.posZ]]


      this.edges = [[12, 0], [0, 8], [8, 4],
      [12, 4], [4, 6], [6, 2],
      [12, 2], [2, 10], [10, 0],
      [13, 1], [1, 10], [10, 2],
      [13, 2], [2, 7], [7, 4],
      [13, 4], [4, 8], [8, 1],
      [14, 0], [0, 11], [11, 2],
      [14, 2], [2, 6], [6, 5],
      [14, 5], [5, 8], [8, 0],
      [15, 1], [1, 8], [8, 5],
      [15, 5], [5, 7], [7, 2],
      [15, 2], [2, 11], [11, 1],
      [16, 0], [0, 10], [10, 3],
      [16, 3], [3, 6], [6, 4],
      [16, 4], [4, 9], [9, 0],
      [17, 1], [1, 9], [9, 4],
      [17, 4], [4, 7], [7, 3],
      [17, 3], [3, 10], [10, 1],
      [18, 0], [0, 9], [9, 5],
      [18, 5], [5, 6], [6, 3],
      [18, 3], [3, 11], [11, 0],
      [19, 1], [19, 3], [19, 5],]



      //  { 16,  4,  9,  0 }
      //  { 17,  1,  9,  4 }
      //  { 17,  4,  7,  3 }
      //  { 17,  3, 10,  1 }
      //  { 18,  0,  9,  5 }
      //  { 18,  5,  6,  3 }
      //  { 18,  3, 11,  0 }
      //  { 19,  1, 11,  3 }
      //  { 19,  3,  7,  5 }
      //  { 19,  5,  9,  1 }


   }
   createForm2() {
      let C0 = (1 / (4 * Math.cos(Math.PI / 14))) * 100;
      let C1 = ((1 + Math.cos(Math.PI / 7)) * Math.sqrt(7) / 7) * 100;
      let C2 = Math.cos(Math.PI / 7) * 100;
      let C3 = 100 * Math.cos(Math.PI / 7) / 2;
      let C4 = 100 * 1 / (4 * Math.sin(Math.PI / 14));
      let C5 = 100 * 1 / (2 * Math.sin(Math.PI / 7));
      let cinq = 0.5 * 100;

      this.nodes = [[C4 + this.posX, -C0 + this.posY, cinq + this.posZ],
      [C4 + this.posX, -C0 + this.posY, -cinq + this.posZ],
      [-C4 + this.posX, -C0 + this.posY, cinq + this.posZ],
      [-C4 + this.posX, -C0 + this.posY, -cinq + this.posZ],
      [C2 + this.posX, C1 + this.posY, cinq + this.posZ],
      [C2 + this.posX, C1 + this.posY, -cinq + this.posZ],
      [-C2 + this.posX, C1 + this.posY, cinq + this.posZ],
      [-C2 + this.posX, C1 + this.posY, -cinq + this.posZ],
      [cinq + this.posX, -C3 + this.posY, cinq + this.posZ],
      [cinq + this.posX, -C3 + this.posY, -cinq + this.posZ],
      [-cinq + this.posX, -C3 + this.posY, cinq + this.posZ],
      [-cinq + this.posX, -C3 + this.posY, -cinq + this.posZ],
      [this.posX, C5 + this.posY, cinq + this.posZ],
      [this.posX, C5 + this.posY, -cinq + this.posZ]];




      this.edges = [[0, 1], [1, 5], [5, 4],
      [4, 5], [5, 13], [13, 12],
      [13, 7], [7, 6],
      [7, 3], [3, 2],
      [3, 11], [11, 10],
      [11, 9], [9, 8],
      [9, 1], [0, 11],
      [9, 11], [0, 3], [3, 8],
      [2, 13], [5, 2],
      [5, 6], [4, 9], [4, 11],
      [11, 0], [6, 1],
      [1, 12], [7, 8],
      [7, 10], [10, 13],
      [12, 9], [4, 9]];






   }
   createOctahedron() {
      //  this.nodes =[[-100+this.posX,100+this.posY,100+this.posZ],
      //               [0+this.posX,63+this.posY,160+this.posZ],
      //               [0+this.posX,-63+this.posY,160+this.posZ],
      //               [-100+this.posX,-100+this.posY,100+this.posZ],
      //               [-16+this.posX,0+this.posY,63+this.posZ]];
      let d = this.depthF;
      let gr = ((1 + Math.sqrt(5)) / 4) * d
      let gr1 = ((3 + Math.sqrt(5)) / 4) * d;
      let cinq = 0.5 * d;
      this.nodes = [[this.posX, cinq + this.posY, gr1 + this.posZ],
      [this.posX, cinq + this.posY, -gr1 + this.posZ],
      [this.posX, -cinq + this.posY, gr1 + this.posZ],
      [this.posX, -cinq + this.posY, -gr1 + this.posZ],
      [gr1 + this.posX, this.posY, cinq + this.posZ],
      [gr1 + this.posX, this.posY, -cinq + this.posZ],
      [-gr1 + this.posX, this.posY, cinq + this.posZ],
      [-gr1 + this.posX, this.posY, -cinq + this.posZ],
      [cinq + this.posX, gr1 + this.posY, +this.posZ],
      [cinq + this.posX, -gr1 + this.posY, +this.posZ],
      [-cinq + this.posX, gr1 + this.posY, +this.posZ],
      [-cinq + this.posX, -gr1 + this.posY, +this.posZ],
      [gr + this.posX, gr + this.posY, gr + this.posZ],
      [gr + this.posX, gr + this.posY, -gr + this.posZ],
      [gr + this.posX, -gr + this.posY, gr + this.posZ],
      [gr + this.posX, -gr + this.posY, -gr + this.posZ],
      [-gr + this.posX, gr + this.posY, gr + this.posZ],
      [-gr + this.posX, gr + this.posY, -gr + this.posZ],
      [-gr + this.posX, -gr + this.posY, gr + this.posZ],
      [-gr + this.posX, -gr + this.posY, -gr + this.posZ]];






      this.edges = [[0, 2], [2, 14], [14, 4], [4, 12],
      [0, 16], [16, 6], [6, 18], [18, 2],
      [0, 12], [12, 8], [8, 10], [10, 16],
      [7, 6], [6, 16], [16, 10], [10, 17],
      [7, 17], [17, 1], [1, 3], [3, 19],
      [7, 19], [19, 11], [11, 18], [18, 6],
      [9, 11], [11, 19], [19, 3], [3, 15],
      [9, 15], [15, 5], [5, 4], [4, 14],
      [9, 14], [14, 2], [2, 18], [18, 11],
      [13, 1], [1, 17], [17, 10], [10, 8],
      [13, 8], [13, 5]];



   };
   drawForm() {
      this.ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
      this.nodes.forEach(elem => {
         this.ctx.beginPath();
         this.ctx.arc(elem[0] + this.xProj, elem[1] + this.yProj, 1, 0, Math.PI * 2, false);
         this.ctx.fill();
         this.ctx.stroke();
      });
      this.ctx.strokeStyle = "rgba(0, 0, 0, 0.3)";
      this.ctx.lineWidth = 2;
      this.edges.forEach(elem => {
         let p1 = elem[0];
         let p2 = elem[1];
         this.ctx.beginPath()
         this.ctx.moveTo(this.nodes[p1][0] + this.xProj, this.nodes[p1][1] + this.yProj);
         this.ctx.lineTo(this.nodes[p2][0] + this.xProj, this.nodes[p2][1] + this.yProj);
         this.ctx.fill();
         this.ctx.stroke();
      });
   }
   draw() {

      this.nodes.forEach(elem => {
         this.ctx.beginPath();
         this.ctx.arc(elem[0], elem[1], 5, 0, Math.PI * 2, false);
         this.ctx.fill();
         this.ctx.stroke();
      })
      this.edges.forEach(elem => {
         let p1 = elem[0];
         let p2 = elem[1];
         this.ctx.beginPath()
         this.ctx.moveTo(this.nodes[p1][0], this.nodes[p1][1]);
         this.ctx.lineTo(this.nodes[p2][0], this.nodes[p2][1]);
         this.ctx.fill();
         this.ctx.stroke();
      })

   }
   rotateX(angle) {
      let sinTheta = Math.sin(angle);
      let cosTheta = Math.cos(angle);
      this.nodes.forEach(elem => {
         let y = elem[1];
         let z = elem[2];
         elem[1] = (y * cosTheta - z * sinTheta);
         elem[2] = (z * cosTheta + y * sinTheta);

      })
   }
   rotateY(angle) {
      let sinTheta = Math.sin(angle);
      let cosTheta = Math.cos(angle);
      this.nodes.forEach(elem => {
         let x = elem[0];
         let z = elem[2];
         elem[0] = (x * cosTheta - z * sinTheta);
         elem[2] = (z * cosTheta + x * sinTheta);

      })
   }
   rotateZ(angle) {
      let sinTheta = Math.sin(angle);
      let cosTheta = Math.cos(angle);
      this.nodes.forEach(elem => {
         let x = elem[0];
         let y = elem[1];
         elem[0] = (x * cosTheta - y * sinTheta);
         elem[1] = y * cosTheta + x * sinTheta;

      })
   }
   /** 
   *Bouger la forme en X et Y 
   * @param {*} xx bouger de x pixels
   * @param {*} yy bouger de x pixels
   */
   moveXY(xx, yy) {
      
         this.xProj += xx;
         this.yProj += yy;
      
   }
   /** 
   * Détéction de la collision sur l'axe X
   * @param {*} limitXLeft la limite à gauche en px, idem pour la droite
   * @param {*} limitXRight la limite à droite en px
   */
   collisionDetectX(limitXLeft, limitXRight) {
      if (this.xProj < limitXLeft + this.depthF || this.xProj > limitXRight -this.depthF) {
         return true;
      } else {
         return false;
      }
   }
   /** 
   * Détéction de la collision sur l'axe Y
   * @param {*} limitYTop la limite en haut en px
   * @param {*} limitYBottom la limite en bas en px
   */
    collisionDetectY( limitYTop, limitYBottom) {
      if (this.yProj < limitYTop + this.depthF || this.yProj > limitYBottom - this.depthF) {
         return true;
      } else {
         return false;
      }
   }
}