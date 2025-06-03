import Destinasi from '../models/DestinasiModel.js';
import Kategori from '../models/KategoriModel.js';

// Get semua destinasi dengan kategori
export const getDestinasi = async (req, res) => {
    try {
        const destinasi = await Destinasi.findAll({
            include: [{
                model: Kategori
            }]
        });
        res.json(destinasi);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Get destinasi berdasarkan ID
export const getDestinasiById = async (req, res) => {
    try {
        const destinasi = await Destinasi.findOne({
            where: {
                id_destinasi: req.params.id
            },
            include: [{
                model: Kategori
            }]
        });
        res.json(destinasi);
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Buat destinasi baru
export const createDestinasi = async (req, res) => {
    try {
        await Destinasi.create(req.body);
        res.json({
            message: "Destinasi berhasil ditambahkan"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Update destinasi
export const updateDestinasi = async (req, res) => {
    try {
        await Destinasi.update(req.body, {
            where: {
                id_destinasi: req.params.id
            }
        });
        res.json({
            message: "Destinasi berhasil diperbarui"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
};

// Hapus destinasi
export const deleteDestinasi = async (req, res) => {
    try {
        await Destinasi.destroy({
            where: {
                id_destinasi: req.params.id
            }
        });
        res.json({
            message: "Destinasi berhasil dihapus"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
};