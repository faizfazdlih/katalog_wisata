import express from 'express';
import { 
    getDestinasi, 
    getDestinasiById, 
    createDestinasi, 
    updateDestinasi, 
    deleteDestinasi 
} from '../controllers/DestinasiController.js';
import { verifyAdmin } from '../middleware/AuthMiddleware.js';

const router = express.Router();

// Rute publik (dapat diakses semua pengguna)
router.get('/destinasi', getDestinasi);
router.get('/destinasi/:id', getDestinasiById);

// Rute admin (hanya dapat diakses oleh admin)
router.post('/destinasi', verifyAdmin, createDestinasi);
router.patch('/destinasi/:id', verifyAdmin, updateDestinasi);
router.delete('/destinasi/:id', verifyAdmin, deleteDestinasi);

export default router;